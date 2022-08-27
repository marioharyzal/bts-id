import { authentication } from "../services/authtentication.service.js";

export const login = async (req, res) => {
    try {
        const dataLogin = await authentication.login(req.body);
        if (dataLogin === null)
            return res.status(400).json({
                status: 400,
                message: "User not found",
            });

        const dataToken = await authentication.generateToken(
            dataLogin.username,
            dataLogin.email,
            dataLogin.name
        );

        res.cookie("refreshToken", dataToken.refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        const token = dataToken.accessToken;

        res.status(200).json({
            status: 200,
            message: "Login success",
            token,
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "User not found",
        });
    }
};

export const register = async (req, res) => {
    try {
        const response = await authentication.register(req.body);
        res.status(200).json({ response });
    } catch (error) {
        console.log(error);
    }
};
