import { Context } from "hono";
import { createTask, getTasks, getTaskById, deleteTask } from "../models/TaskModel.ts";

class TaskController {
    static createTask = async (c: Context) => {
        const {task} = await c.req.json()
        const newTask: any = await createTask({task: task})
        c.status(201)
        return c.json(newTask)
    }

    static getTasks = async (c: Context) => {
        const tasks = await getTasks()
        c.status(200)
        return c.json(tasks)
    }

    static deleteTask = async (c: Context) => {
        const id: string = await c.req.param("id")
        await deleteTask(id)
        c.status(204)
        return c.body(null)
    }
}

export default TaskController