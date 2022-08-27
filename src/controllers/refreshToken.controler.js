import { authentication } from "../services/authtentication.service.js";

export const refreshToken = async (req, res) => {
    try {
        const data = await authentication.refreshToken(req.body.token);
        res.status(200).json({
            status: 200,
            message: "success",
            accessToken: data,
        });
    } catch (error) {
        res.status(403);
        console.log(error);
    }
};
