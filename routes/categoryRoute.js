import express from "express";
import categoryController from "../Controllers/categoryController.js";
const categoryRouter = express.Router();
const controller = new categoryController();

categoryRouter.get("/category/list", (req, res) => {
	controller.list(req, res);
});
categoryRouter.get("/category/:id([0-9]*)", (req, res) => {
	controller.details(req, res);
});
categoryRouter.post("/category", (req, res) => {
	controller.create(req, res);
});
categoryRouter.put("/category/:id([0-9]*)", (req, res) => {
	controller.update(req, res);
});

export default categoryRouter;
