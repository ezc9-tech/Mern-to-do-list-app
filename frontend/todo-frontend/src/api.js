import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // send session cookies
});

export const signup = (data) => API.post("/users/signup", data);
export const login = (data) => API.post("/users/login", data);
export const logout = () => API.post("/users/logout");
export const getMe = () => API.get("/users/me");

export const getTasks = () => API.get("/todo");
export const createTask = (data) => API.post("/todo", data);
export const updateTask = (id, data) => API.put(`/todo/${id}`, data);
export const deleteTask = (id) => API.delete(`/todo/${id}`);
