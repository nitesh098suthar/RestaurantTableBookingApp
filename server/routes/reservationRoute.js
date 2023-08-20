import express from "express";
import { reservationController } from "../controllers/reservationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
// table reservation 
router.route('/reservation').post(authMiddleware, reservationController);

export default router;