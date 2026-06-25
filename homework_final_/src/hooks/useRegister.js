import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router";

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload) => authApi.register(payload),

    onSuccess: (data) => {
      setAuth(data);
      navigate("/dashboard/map") 
    },

    onError: (error) => {
        console.error("Login failed:", error.message)
      }
  });
}