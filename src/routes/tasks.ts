import { Hono } from "hono";
import TaskController from "../controllers/TaskController.ts";

const tasks = new Hono()

tasks
    .post("/", (c) => TaskController.createTask(c))
    .get("/", (c) => TaskController.getTasks(c))
    .delete("/:id", (c) => TaskController.deleteTask(c))

export default tasks