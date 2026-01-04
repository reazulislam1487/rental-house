import { Router } from "express";
import { userController } from "./user.controller.js";
import auth from "../../middleware/auth.js";
import { Roles } from "../auth/auth.constant.js";

const router = Router();

router.post("/", userController.createUser);
router.get("/", auth(Roles.admin), userController.getAllUser);
router.get("/singleuser", auth(Roles.admin, Roles.customer), userController.getSingleUser);


export const userRoute = router;
