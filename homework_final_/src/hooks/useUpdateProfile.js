import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import { useAuthStore } from "../store/authStore";


export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const authUser = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);



  return useMutation({
    
    mutationFn: async (payload) => {
      const user = await usersApi.get(authUser.id);
      
      usersApi.put({
        id: authUser.id,
        ...payload,
        password: user.password
      })
    },

    onSuccess: (updatedUser) => {
      const { password, ...safeUser } = updatedUser;

      setAuth(safeUser);

      queryClient.invalidateQueries({
        queryKey: ["profile", authUser.id],
      });
    },
  });
}