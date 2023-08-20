import {
  login,
  register,
  logout,
  listAllCuisine,
  getMyDetails,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

// get all cuisine anyone can access
router.route("/cuisine").get(listAllCuisine);

// user detail route
router.route("/me").get(authMiddleware, getMyDetails);

//user basic authentication routes
router.route("/login").post(login);
router.route("/logout").get(authMiddleware, logout);
router.route("/register").post(register);


export default router;
