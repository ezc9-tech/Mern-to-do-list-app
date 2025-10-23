export function getAllTasks(req, res){
    try {
        res.status(200).send("Got all tasks")
    } catch (error) {
        res.status(500).send("Could not fetch all tasks")
    }
}

export function getOneTask(req, res){
    try {
        res.status(200).send("Got one task")
    } catch (error) {
        res.status(500).send("Could not fetch one task")
    }
}

export function createTask(req, res){
    try {
        res.status(201).send("Created a task")
    } catch (error) {
        res.status(500).send("Could not create task")
    }
}

export function updateTask(req, res){
    try {
        res.status(200).send("Updated Task")
    } catch (error) {
        res.status(500).send("Could not update task")
    }
}

export function deleteTask(req, res){
    try {
        res.status(200).send("Deleted Task")
    } catch (error) {
        res.status(500).send("Could not delete task")
    }
}