import productModel from "../models/productModel.js";

class productController {
	//Constructor
	constructor() {}

	//Methods
	list = async (req, res) => {
		const result = await productModel.findAll();
		res.json(result);
	};
}

export default productController;
