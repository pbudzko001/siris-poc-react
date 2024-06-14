import useSWR from "swr";
import { login } from "../api/auth";

const useAuth = (username: string, password: string) => {
  // fetch data after check login and pass
  const shouldFetch = username && password;

  const { data, error, mutate } = useSWR(
    shouldFetch ? ["/login", username, password] : null,
    () => login(username, password),
    { revalidateOnFocus: false }
  );

  return {
    user: data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
    revalidate: mutate,
  };
};

export default useAuth;
