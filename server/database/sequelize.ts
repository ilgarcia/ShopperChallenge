import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "challengeshopper",
  "root",
  "Shopp&er767",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
