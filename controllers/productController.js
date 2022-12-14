import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";

categoryModel.hasMany(productModel);
productModel.belongsTo(categoryModel);

class productController {
	//Methods
	list = async (req, res) => {
		const result = await productModel.findAll({
			attributes: ["id", "name", "brand", "categoryId"],
		});
		res.json(result);
	};

	details = async (req, res) => {
		const { id } = req.params || 0;
		const result = await productModel.findOne({
			where: { id: id },
			include: {
				model: categoryModel,
				attributes: ["id", "name"],
			},
		});
		res.json(result);
	};

	create = async (req, res) => {
		const {
			name,
			brand,
			categoryId,
			price,
			image,
			description,
			rating,
			storage,
		} = req.body;

		if (
			name &&
			brand &&
			categoryId &&
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
			categoryId,
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
			categoryId &&
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
