import { Hono } from 'hono'
import mongoose from 'npm:mongoose'
import router from "./src/routes/index.ts";

const app = new Hono()

await mongoose.connect(Deno.env.get("TODODB") || "")

router(app)

Deno.serve(app.fetch)
