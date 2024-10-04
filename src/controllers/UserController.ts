import { Context } from "hono";
import { createUser, getUsers, getUserById, deleteUser } from "../models/UserModel.ts";

class UserController {
    static createUser = async (c: Context) => {
        const {username, password} = await c.req.json()
        const newUser = await createUser({username, password})
        c.status(201)
        return c.json(newUser)
    }

    static getUsers = async (c: Context) => {
        const users = await getUsers()
        c.status(200)
        return c.json(users)
    }

    static getUser = async (c: Context) => {
        const id = await c.req.param("id")
        const user = await getUserById(id)
        c.status(200)
        return c.json(user)
    }

    static deleteUser = async (c: Context) => {
        const id = await c.req.param("id")
        await deleteUser(id)
        c.status(204)
        return c.body(null)
    }
}

export default UserController