import { userService } from "../services/user.service.js";

export const read = async (req, res) => {
    try {
        res.status(200).json(await userService.read());
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Failed, internal server error!",
        });
    }
};
