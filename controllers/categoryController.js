import categoryModel from "../models/categoryModel.js";

class categoryController {
	//Methods
	list = async (req, res) => {
		const result = await categoryModel.findAll({
			attributes: ["id", "name"],
		});
		res.json(result);
	};

	details = async (req, res) => {
		const { id } = req.params || 0;
		const result = await categoryModel.findOne({
			where: { id: id },
		});
		res.json(result);
	};

	create = async (req, res) => {
		console.log(req.body);
	};
}

export default categoryController;
