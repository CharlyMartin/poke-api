import React from "react";
import { PokeAPI } from "pokeapi-types";
import { Link, useSearchParams } from "react-router-dom";

import Pokemon from "../blocks/pokemon";
import Input from "../atoms/input";
import Button from "../atoms/button";
import { usePokemons } from "../../hooks/use-pokemons";

export default function IndexPage() {
  const response = usePokemons();
  const [params, setParams] = useSearchParams();

  const limit = params.get("limit") || 20;
  const offset = params.get("offset") || 0;

  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <Button
          onClick={() => {
            setParams({
              limit: params.get("limit") || "",
              offset: getPreviousOffset(),
            });
          }}
        >
          Previous
        </Button>

        <div className="mx-6 border-b-2 border-current">
          <span>Show</span>
          <Input
            type="text"
            defaultValue={limit}
            onChange={(e) => {
              const value = e.target.value;
              if (!value) return;

              if (Number(value) >= 0 && Number(value) <= 100) {
                setParams({ offset: params.get("offset") || "", limit: value });
              }
            }}
          />
          <span>results</span>
        </div>

        <Button
          onClick={() => {
            setParams({
              limit: params.get("limit") || "",
              offset: getNextOffset(),
            });
          }}
        >
          Next
        </Button>
      </div>

      <br />
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

  function getNextOffset() {
    const max = response.data?.data.count;

    if (max && Number(offset) + Number(limit) >= max) {
      return String(max - Number(limit));
    }

    return String(Number(offset) + Number(limit));
  }

  function getPreviousOffset() {
    if (Number(offset) - Number(limit) < 0) {
      return "0";
    }
    return String(Number(offset) - Number(limit));
  }
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
