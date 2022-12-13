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
		const { name } = req.body;

		if (name) {
			const model = await categoryModel.create(req.body);
			res.json({ newId: model.id });
		} else {
			res.sendStatus(418);
		}
	};

	update = async (req, res) => {
		const { id } = req.params || 0;
		const { name } = req.body;

		if (id && name) {
			const model = await categoryModel.update(req.body, {
				where: { id: id },
			});
			res.json({ msg: "Category Updated" });
		} else {
			res.sendStatus(418);
		}
	};
}

export default categoryController;
