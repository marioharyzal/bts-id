import { User } from "../models/User.js";

export const userService = {
    read: async () => {
        const query = await User.findAll();
        return {
            status: 200,
            message: "Success",
            data: query,
        };
    },
};
