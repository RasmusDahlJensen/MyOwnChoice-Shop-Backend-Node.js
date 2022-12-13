import express from "express";
import productController from "../Controllers/productController.js";
const productRouter = express.Router();
const controller = new productController();

productRouter.get("/product/list", (req, res) => {
	controller.list(req, res);
});
productRouter.get("/product/:id([0-9]*)", (req, res) => {
	controller.details(req, res);
});
productRouter.post("/product/create", (req, res) => {
	controller.create(req, res);
});
productRouter.put("/product/:id([0-9]*)", (req, res) => {
	controller.update(req, res);
});

export default productRouter;
