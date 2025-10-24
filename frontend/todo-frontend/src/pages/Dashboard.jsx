import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { getTasks, createTask, updateTask, deleteTask } from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title) return;
    await createTask({ title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggle = async (id, completed) => {
    await updateTask(id, { completed });
    fetchTasks();
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-xl mx-auto">
        <form onSubmit={handleCreate} className="mb-4">
          <input
            type="text"
            placeholder="Task title"
            className="input input-bordered w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task description"
            className="input input-bordered w-full mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary w-full">Add Task</button>
        </form>

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
