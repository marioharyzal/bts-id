import express from "express";
import route from "./src/routes/routes.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

app.use(route);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App running on port ${process.env.PORT}`);
});
