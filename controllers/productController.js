import productModel from "../models/productModel.js";

class productController {
	//Methods
	list = async (req, res) => {
		const result = await productModel.findAll({
			attributes: ["id", "name", "brand", "category_id"],
		});
		res.json(result);
	};

	details = async (req, res) => {
		const { id } = req.params || 0;
		const result = await productModel.findOne({
			where: { id: id },
		});
		res.json(result);
	};

	create = async (req, res) => {
		console.log(req.body);
	};
}

export default productController;
