import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config.js";

export const Shopping = sequelize.define(
    "shopping",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createddate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "shopping",
    }
);

(async () => {
    await sequelize.sync();
})();

Shopping === sequelize.models.Shopping;
