import { DataTypes } from "sequelize";
import { sequelize as db } from "../database/sequelize";

export const Packs = db.define(
  "packs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    // pack_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
