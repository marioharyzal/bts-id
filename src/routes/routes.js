import express from "express";
import { read } from "../controllers/user.controller.js";
import { login, register } from "../controllers/authtentication.controller.js";
import { authorization } from "../middlewares/authorization.middleware.js";
import { refreshToken } from "../controllers/refreshToken.controler.js";
import {
    readShopping,
    createShopping,
    findOneShopping,
    updateShopping,
    removeShopping,
} from "../controllers/shopping.controller.js";

const route = express();

route.post("/api/users/login", login);
route.post("/api/users/register", register);

route.get("/api/users", authorization, read);
route.post("/users/refresh-token", refreshToken);

route.get("/api/shopping", readShopping);
route.post("/api/shopping", createShopping);
route.get("/api/shopping/:id", findOneShopping);
route.put("/api/shopping/:id", updateShopping);
route.delete("/api/shopping/:id", removeShopping);

export default route;
