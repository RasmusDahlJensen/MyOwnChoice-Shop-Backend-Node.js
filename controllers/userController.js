import userModel from "../models/userModel.js";

class userController {
	//Methods
	list = async (req, res) => {
		const result = await userModel.findAll({
			attributes: ["id", "firstname", "lastname", "email"],
		});
		res.json(result);
	};

	details = async (req, res) => {
		const { id } = req.params || 0;
		const result = await userModel.findOne({
			attributes: [
				"id",
				"firstname",
				"lastname",
				"email",
				"isActive",
				"createdAt",
				"updatedAt",
			],
			where: { id: id },
		});
		res.json(result);
	};

	create = async (req, res) => {
		const { firstname, lastname, email, password } = req.body;

		if (firstname && lastname && email && password) {
			const model = await userModel.create(req.body);
			res.json({ newId: model.id });
		} else {
			res.sendStatus(418);
		}
	};
	update = async (req, res) => {
		const { id } = req.params || 0;
		const { firstname, lastname, email, password } = req.body;

		if (firstname && lastname && email && password) {
			const model = await userModel.update(req.body, {
				where: { id: id },
			});
			res.json({ msg: "User Updated" });
		} else {
			res.sendStatus(418);
		}
	};
}

export default userController;
