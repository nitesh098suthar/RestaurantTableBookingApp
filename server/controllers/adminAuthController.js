import catchAsyncError from "../utils/catchAsyncError.js";
import UserModel from "../model/UserModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { CuisineModel } from "../model/CuisineModel.js";
import { ReservationModel } from "../model/ReservationModel.js";

// ==================== list all user controller - admin ==================
export const listAllUser = catchAsyncError(async (req, res, next) => {
  const users = await UserModel.find().select("-password");
  if (!users) return next(new ErrorHandler(404, "user not found"));
  res.status(200).json({ success: true, users });
});

// ==================== create cuisine - admin ================
export const createCuisine = catchAsyncError(async (req, res, next) => {
  const {
    cuisineName,
    cuisineType,
    cuisineDescription,
    cuisinePrice,
    cuisineImg,
  } = req.body;
  let { isPopular } = req.body;
  if (!cuisineName || !cuisineType || !cuisineDescription || !cuisinePrice) {
    return next(new ErrorHandler(400, "Please fill all fields"));
  }
  if (!isPopular) isPopular = false;
  await CuisineModel.create({
    cuisineName,
    cuisineDescription,
    cuisinePrice,
    cuisineType,
    cuisineImg,
    isPopular,
  });
  res.status(201).json({ success: true, msg: "Cuisine Created" });
});

// ========================== delete cuisine - admin ============================
export const deleteCuisine = catchAsyncError(async (req, res, next) => {
  // getting cuisine id from url
  const cuisineId = req.params.id;
  const cuisine = await CuisineModel.findById(cuisineId);
  if (!cuisine) return next(new ErrorHandler(404, "cuisine not found"));
  cuisine.deleteOne();
  res.status(200).json({ success: true, msg: "Cuisine Deleted Successfully" });
});

// ======================== reservation list ===================
export const listReservations = catchAsyncError(async (req, res, next) => {
  const data = await ReservationModel.find({});
  const mapping = ["t0", "t1", "t2", "t3", "t5", "t6", "t7", "t8", "t9"];
  let ite = [],
    cnt = 0;
  for (let i in data[0]) {
    if (mapping.find((map) => map === i)) {
      if (data[0][i].length > 0) {
        ite[cnt++] = { key: i, ...data[0][i] };
      }
    }
  }
  res.status(200).json({ success: true, msg: ite });
});

export const completeButton = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const { table } = req.body;
  let tableToSearch = "";
  const mapping = {
    "Table 01": "t0",
    "Table 02": "t1",
    "Table 03": "t2",
    "Table 04": "t3",
    "Table 05": "t4",
    "Table 06": "t5",
    "Table 07": "t6",
    "Table 08": "t7",
    "Table 09": "t8",
  };
  for (let i in mapping) {
    if (i == table) {
      tableToSearch = mapping[i];
    }
  }
  const reservationData = await ReservationModel.find({});
  const reservationId = reservationData[0]['_id'].toString('hex');
  let reservation = await ReservationModel.findById(reservationId);
  let tables = reservation[tableToSearch].filter((item) => {return item._id.toString("hex") !== id});
  reservation[tableToSearch] = tables;
  await reservation.save();
  res.status(200).json({ success: true, msg: "Reservation Duration Finished" });
});