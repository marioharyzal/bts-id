import { Shopping } from "../models/Shopping.js";

export const shoppingService = {
    read: async () => {
        const query = await Shopping.findAll();
        console.log(query);
        return {
            status: 200,
            message: "Success",
            data: query,
        };
    },

    create: async (data) => {
        console.log(data);
        const query = await Shopping.create(data);
        return {
            status: 200,
            message: "Success",
            data: query,
        };
    },

    findOne: async (id) => {
        const query = await Shopping.findOne({
            where: {
                id,
            },
        });
        if (query === null) {
            return {
                status: 404,
                message: `Failed to find shopping with id ${id}`,
            };
        } else {
            return {
                status: 200,
                message: "Success",
                data: query,
            };
        }
    },

    update: async (id, data) => {
        const query = await Shopping.update(data, {
            where: {
                id,
            },
        });

        if (query[0] === 0) {
            return {
                status: 404,
                message: "Failed to update data",
            };
        } else {
            return {
                status: 200,
                message: "success update",
            };
        }
    },

    remove: async (id) => {
        const query = await Shopping.destroy({
            where: {
                id,
            },
        });

        if (query === 0) {
            return {
                status: 404,
                message: "Failed to delete data",
            };
        } else {
            return {
                status: 200,
                message: "Success delete",
            };
        }
    },
};
