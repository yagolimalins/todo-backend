import {model, Schema} from "npm:mongoose";
import ITask from "../interfaces/ITask.ts"

const TaskSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    task: {type: String, required: true},
    complete: {type: Boolean, default: false}
})

const TaskModel = model("Task", TaskSchema)

export const createTask = (task: ITask) => {
    return new TaskModel(task).save().then((task) => getTaskById(task.id))
}

export const getTasks = () => {
    return TaskModel.find()
}

export const getTaskById = (id: String) => {
    return TaskModel.findById(id)
}

export const deleteTask = (id: String) => {
    return TaskModel.findByIdAndDelete(id)
}