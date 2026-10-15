import express from "express";
import { create, getAllUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);

export default route;
