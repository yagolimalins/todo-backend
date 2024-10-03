import { Hono } from "hono";
import tasks from "./tasks.ts";

const router = (app: Hono) => {
    app.route("/tasks", tasks)
}

export default router 