import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getPokemons } from "../api";

export function usePokemons() {
  const [params] = useSearchParams();

  const args = {
    limit: params.get("limit") || "",
    offset: params.get("offset") || "",
  };

  return useQuery({
    queryKey: ["pokemons", args],
    queryFn: () => getPokemons(args),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
}
