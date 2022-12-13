import express from "express";
import userController from "../Controllers/userController.js";
const userRouter = express.Router();
const controller = new userController();

userRouter.get("/user/list", (req, res) => {
	controller.list(req, res);
});
userRouter.get("/user/:id([0-9]*)", (req, res) => {
	controller.details(req, res);
});
userRouter.post("/user/create", (req, res) => {
	controller.create(req, res);
});
userRouter.put("/user/:id([0-9]*)", (req, res) => {
	controller.update(req, res);
});

export default userRouter;
