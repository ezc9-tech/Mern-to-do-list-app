import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, trim: true},
    completed: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
}, 
{timestamps: true})

const Task = mongoose.model("Task", taskSchema)

export default Task;
