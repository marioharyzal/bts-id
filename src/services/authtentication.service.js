import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const authentication = {
    login: async (req) => {
        try {
            const query = await User.findAll({
                where: {
                    email: req.email,
                },
                raw: true,
            });

            if (!query[0]) return null;
            const validPassword = await bcrypt.compare(
                req.password,
                query[0].password
            );

            if (validPassword) {
                return {
                    username: query[0].username,
                    email: query[0].email,
                    name: query[0].name,
                };
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
        }
    },

    register: async (req) => {
        const password = req.password;

        const salt = await bcrypt.genSalt(10);

        const encryptedPassword = await bcrypt.hash(password, salt);

        req.password = encryptedPassword;

        const data = {
            username: req.username,
            email: req.email,
            password: encryptedPassword,
            phone: req.phone,
            address: req.address,
            city: req.city,
            country: req.country,
            name: req.name,
            postcode: req.postcode,
            refresh_token: null,
        };

        await User.create(data);

        return {
            status: 200,
            message: "Success",
            data: {
                email: data.email,
                username: data.username,
            },
        };
    },

    generateToken: async (username, name, email) => {
        const accessToken = jwt.sign(
            { username, name, email },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "25s",
            }
        );

        const refreshToken = jwt.sign(
            { username, name, email },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: "1d",
            }
        );

        await User.update(
            { refresh_token: refreshToken },
            {
                where: {
                    username,
                },
            }
        );

        return { accessToken, refreshToken };
    },

    refreshToken: async (token) => {
        const query = await User.findOne({
            where: { refresh_token: token },
            attributes: ["refresh_token", "username", "email", "name"],
        });
        if (!query) return null;

        const { username, name, email } = query;
        const accessToken = jwt.sign(
            { username, name, email },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "25s",
            }
        );
        return accessToken;
    },
};
