import { useMutation} from "@tanstack/react-query";
import { registerApi } from "../api/auth.js"
import { loginApi } from "../api/auth";

export function useRegister() {
  return useMutation({
    mutationFn: (payload) => registerApi(payload),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (payload) => loginApi(payload),
  });
}
