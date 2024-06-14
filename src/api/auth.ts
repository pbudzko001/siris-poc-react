import axiosInstance from "./axiosInstance";

// login endpoint
export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post("/login", { email, password });
  return response.data;
};
