import categoryModel from "../models/categoryModel.js";

class categoryController {
	//Constructor
	constructor() {}

	//Methods
	list = async (req, res) => {
		const result = await categoryController.findAll();
		res.json(result);
	};
}

export default categoryController;
