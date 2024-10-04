import { Hono } from "hono";
import tasks from "./tasks.ts";
import users from "./users.ts";
import auth from "./auth.ts";

const router = (app: Hono) => {
    app.route("/tasks", tasks)
    app.route("/users", users)
    app.route("/login", auth)
}

export default router 