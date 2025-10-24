import Task from "../models/taskModel.js"

export async function getAllTasks(req, res){
    try {
        const tasks = await Task.find({ user: req.session.userId})
        res.status(200).json({message:"Got all tasks", tasks})
    } catch (error) {
        res.status(500).json({message:"Could not fetch all tasks", error})
    }
}

export async function getOneTask(req, res){
    try {
        const taskID = req.params.id
        const requestedTask = await Task.findOne({ _id: taskID, user: req.session.userId})
        if (!requestedTask) {
          return res.status(404).json({ message: "Could not find task with that id" });
        }
        res.status(200).json({message: "Found task successfully", requestedTask})
    } catch (error) {
        res.status(500).send("Could not fetch one task")
    }
}

export async function createTask(req, res){
    try {
        const {title, description, completed} = req.body
        if (!title) {
            return res.status(400).json({message: "Title is required"})
        }
        const newTask = new Task({ title, description, completed, user: req.session.userId });
        await newTask.save()
        res.status(201).json({message: "Created a task", newTask})
    } catch (error) {
        res.status(500).json({message: "Could not create task", error})
    }
}

export async function updateTask(req, res){
    try {
        const taskID = req.params.id;
        const updates = req.body;
        const updatedTask = await Task.findOneAndUpdate({_id: taskID, user: req.session.userId}, updates, {runValidators: true, new: true})
        if (!updatedTask){
            return res.status(404).json({message: "Could not find task with that id"});
        }
        res
          .status(200)
          .json({ message: "Successfully updated task", updatedTask});
    } catch (error) {
        res.status(500).json({message: "Could not update task", error})
    }
}

export async function deleteTask(req, res){
    try {
        const taskID = req.params.id;
        const deletedTask = await Task.findOneAndDelete({_id: taskID, user: req.session.userId})
        if (!deletedTask){
            return res.status(404).json({message: "Could not find task with that id"});
        }
        res.status(200).json({message: "Successfully deleted task", deletedTask})
    } catch (error) {
        res.status(500).json({message: "Could not delete task", error})
    }
}