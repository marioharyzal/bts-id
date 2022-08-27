import { Sequelize } from "sequelize"
import * as dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_HOST, process.env.DB_PASSWORD, {
  host: process.env.ORM_HOST,
  dialect: process.env.ORM_DIALECT
})
