import useSWR from "swr";
import { login } from "../api/auth";

const useAuth = (email: string, password: string) => {
  // fetch data after check login and pass
  const shouldFetch = email && password;

  const { data, error, mutate } = useSWR(
    shouldFetch ? ["/login", email, password] : null,
    () => login(email, password),
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
