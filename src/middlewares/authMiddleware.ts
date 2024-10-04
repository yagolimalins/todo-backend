import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";

const authMiddleware = createMiddleware(async (c, next) => {
    try {
        const token = getCookie(c, "token") || ""
        await verify(token, Deno.env.get("JWTSECRET")!)
        await next()
    } catch (_e) {
        c.status(401)
        return c.json({message: "Invalid token"})
    }
})

export default authMiddleware