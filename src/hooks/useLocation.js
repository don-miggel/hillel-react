import { useQuery } from "@tanstack/react-query";
import { locationsApi } from "../api/locationsApi";


export function useLocation(id) {
    return useQuery({
      queryKey: ["locations", id],
      queryFn: () => locationsApi.get(id),
      enabled: !!id,
      retry: false,
      staleTime: 5 * 60 * 1000,
    });
  }