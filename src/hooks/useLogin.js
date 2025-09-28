import { useMutation, useQuery } from "@tanstack/react-query";
import { loginApi } from "../api/auth";

export function useLogin() {
    return useMutation({
        mutationFn: (payload) => loginApi(payload),
    })
}