import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-200 px-4 py-2">
      <div className="flex-1 font-bold">To-Do App</div>
      <button className="btn btn-sm btn-outline" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
