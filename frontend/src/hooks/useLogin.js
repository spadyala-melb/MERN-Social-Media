import { useState } from "react";
import useUserContext from "./useUserContext";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const useLogin = () => {
  // const {user} = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useUserContext();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, {
        email,
        password,
      });
      dispatch({ type: "LOGIN", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    }
  };
  return { login, isLoading, error };
};
