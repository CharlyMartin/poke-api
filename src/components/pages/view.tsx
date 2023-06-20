import React from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../atoms/button";
import PokemonLoader from "../loaders/pokemon";
import { capitalize } from "../../utils";
import { usePokemon } from "../../hooks/use-pokemon";
import Stat from "../blocks/stat";
import Badge from "../atoms/badge";

export default function ViewPage() {
  const { id } = useParams();
  const response = usePokemon(String(id));

  return (
    <React.Fragment>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI logo"
        className="mx-auto w-72"
      />

      <br />
      <br />

      <div className="flex justify-center">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>

      <br />
      <br />

      <PokemonLoader
        {...response}
        render={(data) => {
          const { id, name, sprites, stats, types } = data;

          // @ts-ignore: PokeAPI not typed correctly for other images
          const src = sprites.other["official-artwork"].front_default;

          return (
            <div className="mx-auto max-w-lg">
              <h1 className="text-center text-2xl font-bold">
                {capitalize(name)} #{id}
              </h1>

              <br />

              <img src={src} alt={name} className="w-full" />

              <br />
              <br />

              <Stat
                left="Attribute"
                right="Value"
                className="font-semibold text-slate-800"
              />
              {stats.map((stat, i) => {
                return (
                  <Stat key={i} left={stat.stat.name} right={stat.base_stat} />
                );
              })}

              <br />

              <div className="space-x-2">
                {types.map((type, i) => {
                  return (
                    <Badge key={i} variant="md">
                      {capitalize(type.type.name)}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        }}
      />
    </React.Fragment>
  );
}
