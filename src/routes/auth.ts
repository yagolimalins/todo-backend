import { Hono } from "hono";
import AuthController from "../controllers/AuthController.ts";

const auth = new Hono()

auth
    .post("/", (c) => AuthController.login(c))

export default auth