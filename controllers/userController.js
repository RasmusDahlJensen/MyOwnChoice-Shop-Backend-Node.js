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
}

export default userController;
