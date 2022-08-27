import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.config.js";

export const User = sequelize.define(
    "User",
    {
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            // allowNull defaults to true
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        refresh_token: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        // Other model options go here
        tableName: "user",
        timestamps: false,
        createdAt: false,
    }
);

(async () => {
    await sequelize.sync();
})();

// `sequelize.define` also returns the model
User === sequelize.models.User;
