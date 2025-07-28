import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // or your actual base URL
  withCredentials: true, // optional: useful if working with cookies/sessions
});

export default API;
