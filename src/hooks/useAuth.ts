import useSWR from "swr";
import { login } from "../api/auth";

// Hook personalizado para autenticação do usuário
const useAuth = (username: string, password: string) => {
  // Apenas faz a solicitação se as credenciais estiverem preenchidas
  const shouldFetch = username && password;

  const { data, error, mutate } = useSWR(
    shouldFetch ? ["/login", username, password] : null, // Condicional para chamar o fetcher
    () => login(username, password),
    { revalidateOnFocus: false } // Configurações adicionais se necessário
  );

  return {
    user: data, // Dados do usuário logado
    isLoading: !error && !data && shouldFetch, // Estado de carregamento
    isError: error, // Estado de erro
    revalidate: mutate, // Função para revalidar os dados
  };
};

export default useAuth; // Exporta o hook personalizado
