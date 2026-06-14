import { useQuery } from "@tanstack/react-query";
import { service } from "../api/locationsApi";


export function useLocations() {

  return useQuery({
    queryKey: ["locations"],
    queryFn: () => service.get(),
    staleTime: 5 * 60 * 1000,
  });
}