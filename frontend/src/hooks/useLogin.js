import { useState } from "react";
import { useUserContext } from "./useUserContext";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const useLogin = () => {
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

      const resp = await axios.get(
        `${API_BASE_URL}/users/${response.data._id}`,
        {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        }
      );
      resp.data.token = response.data.token;
      delete resp.data.password;
      // console.log("resp.data ", resp.data);
      dispatch({ type: "LOGIN", payload: resp.data });
      localStorage.setItem("user", JSON.stringify(resp.data));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    }
  };
  return { login, isLoading, error };
};
