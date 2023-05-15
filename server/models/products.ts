import { DataTypes } from "sequelize";
import { sequelize as db } from "../database/sequelize";

export const Products = db.define(
  "products",
  {
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cost_price: {
      type: DataTypes.FLOAT(9, 2),
      allowNull: false,
    },
    sales_price: {
      type: DataTypes.FLOAT(9, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
