import React from "react";

export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="card bg-base-100 shadow-md p-4 mb-3">
      <h2 className="font-bold text-lg">{task.title}</h2>
      <p>{task.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <span
            className={`badge ${
              task.completed ? "badge-success" : "badge-warning"
            }`}
            onClick={() => onToggle(task._id, !task.completed)}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
        <button
          className="btn btn-xs btn-error"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
