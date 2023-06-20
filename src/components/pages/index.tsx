import { PokeAPI } from "pokeapi-types";
import { Link } from "react-router-dom";

import { usePokemons } from "../../hooks/use-pokemons";

export default function IndexPage() {
  const response = usePokemons();

  return (
    <Loader
      {...response}
      render={(data) => {
        return (
          <ul>
            {data.map((pokemon) => {
              const { name } = pokemon;
              return (
                <Link key={name} to={`/pokemon/${name}`}>
                  <div>
                    <h1>{name}</h1>
                  </div>
                </Link>
              );
            })}
          </ul>
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
