import { useUserContext } from "./useUserContext";

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const logout = async () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", payload: null });
  };
  return { logout };
};
