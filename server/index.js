import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8080; //escuchar en el puerto del .env, si no lo encuentra escuchar en el 8080
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL)
        .then(() => {
            console.log("MongoDB connected sucessfully.");
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT} :3`);
            });
        })
        .catch((error) => console.log(error));

app.use("/api", route);