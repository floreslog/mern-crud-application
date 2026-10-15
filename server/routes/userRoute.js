import express from "express";
import { create, getAllUsers, getById } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getById);

export default route;
