import { useMutation } from "@tanstack/react-query"
import { registerApi } from "../api/auth.js"

export function useRegister(){
    return useMutation({
        mutationFn: (payload) => registerApi(payload),
})
}