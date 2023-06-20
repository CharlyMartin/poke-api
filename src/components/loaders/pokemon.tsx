import { PokeAPI } from "pokeapi-types";

import { usePokemon } from "../../hooks/use-pokemon";

type Props = ReturnType<typeof usePokemon> & {
  render: (data: PokeAPI.Pokemon) => React.ReactElement;
};

export default function PokemonLoader(props: Props) {
  const { data, render, isLoading, isFetching, error } = props;

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No Data</p>;

  return render(data.data);
}
