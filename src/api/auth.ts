import axiosInstance from "./axiosInstance";

// login endpoint
export const login = async (username: string, password: string) => {
  const response = await axiosInstance.post("/login", { username, password });
  return response.data;
};
