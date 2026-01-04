import { Router } from "express";
import { bookingsController } from "./bookings.controller.js";
import auth from "../../middleware/auth.js";
import { Roles } from "../auth/auth.constant.js";

const router = Router();

router.post("/", auth(Roles.admin, Roles.customer), bookingsController.createBooking);
router.get("/", auth(Roles.admin, Roles.customer), bookingsController.getBookings);
router.put("/:bookingId", auth(Roles.admin, Roles.customer), bookingsController.updateBooking);

export const bookingsRoute = router;
