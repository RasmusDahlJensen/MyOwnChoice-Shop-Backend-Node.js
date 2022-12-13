import { sequelize } from "../config/dbConfig.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class userModel extends Model {}

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
		},
	},
	{
		sequelize,
		modelName: "user",
	}
);
