export function getAllTasks(req, res){
    try {
        res.status(200).send("Got all tasks")
    } catch (error) {
        res.status(500).send("Could not fetch all tasks")
    }
}