import { Context } from "hono";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { getUserByUsername } from "../models/UserModel.ts";

class AuthController {
    static login = async (c: Context) => {
        const { username, password } = await c.req.json();
        const user = await getUserByUsername(username).select("+password");

        if (password === user?.password) {
            const payload = {
                sub: user?.id,
                exp: Math.floor(Date.now() / 1000) + 60 * 1,
            };

            const token = await sign(payload, Deno.env.get("JWTSECRET")!);
            setCookie(c, "token", token);

            c.status(204);
            return c.body(null);
        } else {
            c.status(401)
            return c.json({message: "Username or password mismatch"})
        }
    };
}

export default AuthController