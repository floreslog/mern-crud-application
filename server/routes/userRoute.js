import express from "express";
import { create, getAllUsers, getById, update } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getById);
route.put("/update/user/:id", update);

export default route;
