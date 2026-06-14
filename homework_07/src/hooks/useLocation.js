import { useQuery } from "@tanstack/react-query";
import { service } from "../api/locationsApi";


export function useLocation(id) {
    return useQuery({
      queryKey: ["locations", id],
      queryFn: () => service.get(id),
      enabled: !!id,
      retry: false,
      staleTime: 5 * 60 * 1000,
    });
  }