//Dependencies
import { sequelize } from "../config/dbConfig.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";

class userModel extends Model {}

//Table data
userModel.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isActive: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 1,
		},
	},
	{
		sequelize,
		modelName: "user",
		freezeTableName: true,
		hooks: {
			beforeCreate: async (user, options) => {
				user.password = await createHash(user.password);
			},
			beforeUpdate: async (user, options) => {
				user.password = await createHash(user.password);
			},
		},
	}
);

const createHash = async (string) => {
	const salt = await bcrypt.genSalt(10);
	const hashedString = await bcrypt.hash(string, salt);
	return hashedString;
};

export default userModel;
