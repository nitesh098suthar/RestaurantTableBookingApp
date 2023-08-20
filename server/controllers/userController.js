import catchAsyncError from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { resSender } from "../utils/resSender.js";
import UserModel from "../model/UserModel.js";
import { CuisineModel } from "../model/CuisineModel.js";

// ==================== login controller ==============================
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler(401, "Please fill all fields!"));
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler(404, "user not found!"));
  const authUser = await user.comparePassword(password);
  if (!authUser) return next(new ErrorHandler(401, "Wrong Password!"));
  resSender(200, user, "LoggedIn Successfully", res);
});

// =================== register controller ============================
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, contactNumber, password } = req.body;

  if (!name || !email || !password || !contactNumber )
    return next(new ErrorHandler(401, "Please fill all fields!"));

  const user = await UserModel.findOne({ email });

  if (user) return next(new ErrorHandler(404, "user already exist!"));

  //creating user
  const newUser = await UserModel.create({
    name,
    email,
    contactNumber,
    password,
  });
  resSender(200, newUser, "Registered Successfully", res);
});


// ==================== logout user controller ====================
export const logout = catchAsyncError(async (req, res, next) => {
  // changing existing cookie value to a null value
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      sameSite: "none",
      secure: true,
      httpOnly: true,
    })
    .json({ success: true, msg: "user logout successfully" });
});

// ================== get loggedin user information - authenticated =====================
export const getMyDetails = catchAsyncError(async (req, res, next) => {
  //id of logged in user from auth - middleware
  const userId = req.id;
  const user = await UserModel.findById(userId).select("-password");
  if (!user) return next(new ErrorHandler(404, "user not fonund"));
  res.status(200).json({ success: true, user });
});

// ===================== list all cuisine controller ==============
export const listAllCuisine = catchAsyncError(async (req, res, next) => {
  const cuisines = await CuisineModel.find();
  if (!cuisines) return next(new ErrorHandler(404, "cuisine not found"));
  res.status(200).json({ success: true, cuisines });
});
