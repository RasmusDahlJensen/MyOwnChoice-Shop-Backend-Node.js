//Dependencies
import express from "express";
import { sequelize } from "../config/dbConfig.js";

const router = express.Router();

//Tabeller som skal oprettes
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import categoryModel from "../models/categoryModel.js";

//Init router
router.get("/init", (req, res) => {
	try {
		sequelize.sync();
		res.sendStatus(200);
	} catch (err) {
		res.send(err);
	}
});

export { router };
