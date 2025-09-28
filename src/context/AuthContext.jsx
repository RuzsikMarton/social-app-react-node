import { createContext, useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [authError, setAuthError] = useState(null);
  const {mutate: loginMutate, isPending} = useLogin();

  const login = (payload) => {
    loginMutate(payload, {
      onSuccess: (data) => {
        setCurrentUser(data);
      },
      onError: (err) => {
        console.log(err)
        const errMsg =
          err?.response?.data && typeof err.response.data === "string"
            ? err.response.data
            : "Something went wrong. Please try again.";
        setAuthError(errMsg)
      }
    })
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])

  return(
    <AuthContext.Provider value={{currentUser, login, authError}}>
        {children}
    </AuthContext.Provider>
  )
};
