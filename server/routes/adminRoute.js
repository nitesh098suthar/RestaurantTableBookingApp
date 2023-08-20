import {
  listAllUser,
  createCuisine,
  deleteCuisine,
  listReservations,
  completeButton
} from "../controllers/adminAuthController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import isAdminMiddleware from "../middleware/isAdminMiddleware.js";

import express from "express";
const router = express.Router();

// completeing reservation
router.route('/check/:id').post(authMiddleware, isAdminMiddleware, completeButton);

// get all user list route
router.route("/users").get(authMiddleware, isAdminMiddleware, listAllUser);
router.route('/reservations').get(authMiddleware, isAdminMiddleware, listReservations);
//create cuisine
router
  .route("/cuisine")
  .post(authMiddleware, isAdminMiddleware, createCuisine)
  
// delete specific cuisine using its id, taken from url
// id = req.params.id  to get id
router.route('/cuisine/:id').delete(authMiddleware, isAdminMiddleware, deleteCuisine);

export default router;
