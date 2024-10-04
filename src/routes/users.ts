import { Hono } from "hono";
import UserController from "../controllers/UserController.ts";
import authMiddleware from "../middlewares/authMiddleware.ts";

const users = new Hono()

users.use(authMiddleware)

users
    .post("/", (c) => UserController.createUser(c))
    .get("/", (c) => UserController.getUsers(c))
    .get("/:id", (c) => UserController.getUser(c))
    .delete("/:id", (c) => UserController.deleteUser(c))

export default users