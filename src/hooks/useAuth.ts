import useSWR from "swr";
import { login } from "../api/auth";

const useAuth = (username: string, password: string) => {
  const { data, error, mutate } = useSWR(["/login", username, password], () =>
    login(username, password)
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    revalidate: mutate,
  };
};

export default useAuth;
