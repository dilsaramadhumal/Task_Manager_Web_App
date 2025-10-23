import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // backend will run here

const api = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
});

export async function fetchTasks() {
  return api.get("/tasks");
}

export async function createTask(payload) {
  return api.post("/tasks", payload);
}

export async function updateTask(id, payload) {
  return api.put(`/tasks/${id}`, payload);
}

export async function deleteTask(id) {
  return api.delete(`/tasks/${id}`);
}

export default api;
