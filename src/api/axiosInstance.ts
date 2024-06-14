import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7146",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Mock Adapter configuration for test api 1

/* const mock = new MockAdapter(axiosInstance);

// Mock for login rote
mock.onPost("/login").reply((config) => {
  const { username, password } = JSON.parse(config.data);
  if (username === "admin@test.com" && password === "123") {
    return [200, { name: "Admin User", email: "admin@test.com" }];
  } else {
    return [401, { message: "Email ou palavra-passe incorretos" }];
  }
}); */

export default axiosInstance;
