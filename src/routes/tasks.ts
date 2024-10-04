import { Hono } from "hono";
import TaskController from "../controllers/TaskController.ts";
import authMiddleware from "../middlewares/authMiddleware.ts";

const tasks = new Hono()

tasks.use(authMiddleware)

tasks
    .post("/", (c) => TaskController.createTask(c))
    .get("/", (c) => TaskController.getTasks(c))
    .get("/:id", (c) => TaskController.getTask(c))
    .delete("/:id", (c) => TaskController.deleteTask(c))

export default tasks