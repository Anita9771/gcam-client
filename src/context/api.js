import axios from "axios";

const API = axios.create({
  // baseURL: "https://gcam-server.onrender.com", 
  baseURL: "http://localhost:5000",// or your actual base URL
  withCredentials: true, // optional: useful if working with cookies/sessions
});

export default API;
