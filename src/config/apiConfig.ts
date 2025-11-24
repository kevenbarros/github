import axios from "axios";

const githubClient = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000,
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
});

export { githubClient };
