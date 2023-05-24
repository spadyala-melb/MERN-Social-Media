import { useState } from "react";
import useUserContext from "./useUserContext";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useUserContext();

  const register = async (username, email, password, passwordAgain) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, {
        username,
        email,
        password,
      });
      dispatch({ type: "REGISTER", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    }
  };
  return { register, isLoading, error };
};
