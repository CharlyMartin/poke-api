import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../api";

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ["pokemons", name],
    queryFn: () => getPokemon(name),
  });
}
