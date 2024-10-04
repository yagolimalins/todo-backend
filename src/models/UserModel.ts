import {model, Schema} from "npm:mongoose";
import IUser from "../interfaces/IUser.ts";

const UserSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false}
})

const UserModel = model("User", UserSchema)

export const createUser = (user: IUser) => {
    return new UserModel(user).save().then((user) => getUserById(user.id))
}

export const getUsers = () => {
    return UserModel.find()
}

export const getUserById = (id: string) => {
    return UserModel.findById(id)
}

export const getUserByUsername = (username: string) => {
    return UserModel.findOne({username})
}

export const deleteUser = (id: string) => {
    return UserModel.findByIdAndDelete(id)
}