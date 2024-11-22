import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api/fetchRestaurants";
import { queryClient } from "../main";
import { Restaurant } from "../types/Types";

export const useRestaurants = () => {
  const { data, isLoading, error } = useQuery<Restaurant[]>(
    {
      queryFn: () => getRestaurants(),
      queryKey: ["restaurants"],
    },
    queryClient
  );

  return { data, isLoading, error };
};
