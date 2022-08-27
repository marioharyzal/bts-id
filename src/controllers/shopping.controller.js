import { shoppingService } from "../services/shopping.service.js";

export const readShopping = async (req, res) => {
    try {
        res.status(200).json(await shoppingService.read());
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Failed, internal server error!",
        });
    }
};

export const createShopping = async (req, res) => {
    try {
        res.status(200).json(await shoppingService.create(req.body));
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Failed, internal server error!",
        });
    }
};

export const findOneShopping = async (req, res) => {
    try {
        res.status(200).json(await shoppingService.findOne(req.params.id));
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "failed, internal server error!",
        });
    }
};

export const updateShopping = async (req, res) => {
    console.log(req.params.id, req.body);
    try {
        res.status(200).json(
            await shoppingService.update(req.params.id, req.body)
        );
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "Failed, internal server error!",
        });
    }
};

export const removeShopping = async (req, res) => {
    try {
        res.status(200).json(await shoppingService.remove(req.params.id));
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "Failed, internal server error!",
        });
    }
};
