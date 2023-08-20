import { ReservationModel } from "../model/ReservationModel.js";
import UserModel from "../model/UserModel.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// function to change user input time in hours
const timeStringToHour = (time) => {
  const timeList = time.split(" ");
  let getHour = timeList[0];
  if (timeList[timeList.length - 1] === "pm") {
    getHour = Number(timeList[0]) + 12;
  }
  return getHour;
};

// main function for reservation
export const reservationController = catchAsyncError(async (req, res, next) => {
  if (!req.id)
    return next(new ErrorHandler(400, "You must login before Reservation"));
  const user = await UserModel.findById(req.id);
  if (!user)
    return next(new ErrorHandler(400, "You must login before Reservation"));
  const email = user.email;
  if (!email) return next(new ErrorHandler(400, "Email not found"));

  //create document in mongodb for the very first time
  //note: uncomment following line for only once
  //after creating a single document in data base just remove or comment this line
  const reservationData = await ReservationModel.find();
  if (reservationData.length <= 0) ReservationModel.create({});

  const {
    fname,
    lname,
    person,
    startTime,
    endTime,
    date,
    message,
    phoneNumber,
    table,
  } = req.body;

  if (
    !fname ||
    !lname ||
    !person ||
    !startTime ||
    !endTime ||
    !date ||
    !phoneNumber ||
    !table
  ) {
    return next(new ErrorHandler(400, "Please fill all fields"));
  }

  // converting startTime, endtime string to number
  const sTime = timeStringToHour(startTime);
  const eTime = timeStringToHour(endTime);

  //creating date instance
  let d = new Date();
  // creating object with current hour, date, and month for later use ;
  let curr = {
    currDate: d.getDate() < 10 ? `0${d.getDate()}` : d.getDate(),
    currMonth: d.getMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1,
    currHour: d.getHours(),
    currYear: d.getFullYear(),
  };

  // converting today's date in integer form and
  // comparing that integer formatted today's date to user entered date (which is too converted into integer form)
  const todayDate = Date.parse(
    `${curr.currYear}-${curr.currMonth}-${curr.currDate}`
  );

  if (Date.parse(date) < todayDate) {
    return next(new ErrorHandler(400, "You've Entered Past Time 0"));
  }

  // checking if user entered past value ( for time )
  if (sTime > eTime) {
    return next(new ErrorHandler(400, "You've Entered Past Time 1"));
  }

  const userTable = reservationData[0][table];

  let rUnion = [];
  let aUnion = [];
  if (userTable.length > 0) {
    userTable.forEach((item) => {
      if (item.date.getTime() === Date.parse(date)) {
        // converting startTime, endtime string to number
        const st = timeStringToHour(item.startTime);
        const et = timeStringToHour(item.endTime);
        //creating union of all time
        for (let i = st; i <= et; i++) {
          rUnion.push(i);
        }
      }
    });
  }
  //creating list of hours for applied time
  for (let i = sTime; i <= eTime; i++) {
    aUnion.push(i);
  }
  // finding intersection of rUnion and aUnion
  const intersection = rUnion.filter((value) => aUnion.includes(value));

  if (intersection.length !== 0) {
    return next(
      new ErrorHandler(
        400,
        "Table Already Reserved.\nTry Selecting another Table or Time."
      )
    );
  }

  userTable.push({
    fname,
    lname,
    person,
    startTime,
    endTime,
    date,
    message,
    phoneNumber,
    table,
    email,
  });
  await reservationData[0].save();
  res
    .status(201)
    .json({ success: true, msg: "Table has been Reserved for you" });
});
