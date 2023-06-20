import axios from "axios";
import { PokeAPI } from "pokeapi-types";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

// GET ALL
type ListArgs = {
  limit?: number;
  offset?: number;
};

export function getPokemons(args?: ListArgs) {
  const { limit = 20, offset = 0 } = args || {};

  return instance.get<PokeAPI.Pokemon[]>("/pokemon", {
    params: { limit, offset },
  });
}

// GET ONE
export function getPokemon(id: number) {
  return instance.get<PokeAPI.Pokemon>(`/pokemon/${id}`);
}
