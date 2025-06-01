import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth", // Your NestJS API
});

export default api;
