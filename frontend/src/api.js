import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5001",
});

export const getRecords = (search) => API.get("/records", { params: { search } });
export const createRecord = (name) => API.post("/records", { name });
export const deleteRecord = (id) => API.delete(`/records/${id}`);
export const runCommand = (command) => API.post("/run-command", { command });
