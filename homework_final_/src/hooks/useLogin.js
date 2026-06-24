import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { authApi } from "../api/ authApi"
import { useAuthStore } from "../store/authStore"

export function useLogin() {
  const setAuth = useAuthStore(state => state.setAuth)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload) => authApi.login(payload),

    onSuccess: (data) => {
      setAuth(data) 
      navigate("/dashboard/map")
    },

    onError: (error) => {
      console.error("Login failed:", error.message)
    }
  })
}