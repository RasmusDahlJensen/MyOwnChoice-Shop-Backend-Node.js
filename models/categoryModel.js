//Dependencies
import { sequelize } from "../config/dbConfig.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class categoryModel extends Model {}

//Table data

categoryModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "category",
		freezeTableName: true,
	}
);

export default categoryModel;
