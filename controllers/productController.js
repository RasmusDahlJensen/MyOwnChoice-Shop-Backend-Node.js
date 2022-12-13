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
		const {
			name,
			brand,
			category_id,
			price,
			image,
			description,
			rating,
			storage,
		} = req.body;

		if (
			name &&
			brand &&
			category_id &&
			price &&
			image &&
			description &&
			rating &&
			storage
		) {
			const model = await productModel.create(req.body);
			res.json({ newId: model.id });
		} else {
			res.sendStatus(418);
		}
	};

	update = async (req, res) => {
		const { id } = req.params || 0;
		const {
			name,
			brand,
			category_id,
			price,
			image,
			description,
			rating,
			storage,
		} = req.body;

		if (
			id &&
			name &&
			brand &&
			category_id &&
			price &&
			image &&
			description &&
			rating &&
			storage
		) {
			const model = await productModel.update(req.body, {
				where: { id: id },
			});
			res.json({ msg: "Product Updated" });
		} else {
			res.sendStatus(418);
		}
	};
}

export default productController;
