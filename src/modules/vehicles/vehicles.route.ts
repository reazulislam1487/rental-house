import { Router } from "express";
import { vehiclesController } from "./vehicles.controller.js";
import auth from "../../middleware/auth.js";
import { Roles } from "../auth/auth.constant.js";

const router = Router();

router.post("/", auth(Roles.admin), vehiclesController.createVehicle);
router.get("/", vehiclesController.getAllVehicles);
router.get("/:vehicleId", vehiclesController.getVehicleById);
router.put("/:vehicleId", auth(Roles.admin), vehiclesController.updateVehicle);
router.delete("/:vehicleId", auth(Roles.admin), vehiclesController.deleteVehicle);

export const vehiclesRoute = router;
