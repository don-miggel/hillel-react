import { useQuery } from "@tanstack/react-query";
import { usersApi } from "@/api/usersApi";
import { useAuthStore } from "@/store/authStore";


export function useProfile() {

    const user = useAuthStore(state =>state.user);

    return useQuery({
      queryKey: ["profile", user?.id],
      queryFn: () => usersApi.get(user.id),
      enabled: !!user?.id
    });
  }