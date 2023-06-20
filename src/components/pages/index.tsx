import { PokeAPI } from "pokeapi-types";
import { Link } from "react-router-dom";

import Pokemon from "../blocks/pokemon";
import { usePokemons } from "../../hooks/use-pokemons";

export default function IndexPage() {
  const response = usePokemons();

  return (
    <Loader
      {...response}
      render={(data) => {
        return (
          <div className="grid grid-cols-5 gap-4">
            {data.map((pokemon) => {
              const { name } = pokemon;
              return (
                <Link key={name} to={`/pokemon/${name}`}>
                  <Pokemon name={name} />
                </Link>
              );
            })}
          </div>
        );
      }}
    />
  );
}

type LoaderProps = ReturnType<typeof usePokemons> & {
  render: (data: PokeAPI.NamedAPIResource[]) => React.ReactElement;
};

function Loader(props: LoaderProps) {
  const { data, render, isLoading, isFetching, error } = props;

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No Data</p>;

  return render(data.data.results);
}
