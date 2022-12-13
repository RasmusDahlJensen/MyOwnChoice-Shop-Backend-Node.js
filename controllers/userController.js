import userModel from "../models/userModel.js";

class userController {
	//Constructor
	constructor() {}

	//Methods
	list = async (req, res) => {
		const result = await userController.findAll();
		res.json(result);
	};
}

export default userController;
