import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "challengeshopper",
  "root",
  process.env.MYSQL_SERVER_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
