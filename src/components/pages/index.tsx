import React from "react";
import { PokeAPI } from "pokeapi-types";
import { Link, useSearchParams } from "react-router-dom";

import Pokemon from "../blocks/pokemon";
import Input from "../atoms/input";
import { usePokemons } from "../../hooks/use-pokemons";

export default function IndexPage() {
  const response = usePokemons();
  const [params, setParams] = useSearchParams();

  return (
    <React.Fragment>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI logo"
        className="mx-auto w-48"
      />

      <br />

      <div className="flex items-center justify-center">
        <div className="border-b-2 border-current">
          <span>Show</span>
          <Input
            type="text"
            value={params.get("limit") || "20"}
            onChange={(e) => {
              const value = e.target.value;
              if (!value) return;
              if (value >= "0" && value <= "100") {
                setParams({ limit: value });
              }
            }}
          />
          <span>results</span>
        </div>
      </div>

      <br />

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
    </React.Fragment>
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
