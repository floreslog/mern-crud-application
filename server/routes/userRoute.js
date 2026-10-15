import express from "express"
import { create } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);

export default route;
