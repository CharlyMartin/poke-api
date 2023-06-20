import { PokeAPI } from "pokeapi-types";

import Badge from "../atoms/badge";
import { usePokemon } from "../../hooks/use-pokemon";
import { capitalize } from "../../utils";

type Props = {
  name: string;
};

export default function Pokemon(props: Props) {
  const { name } = props;

  const response = usePokemon(name);

  return (
    <Loader
      {...response}
      render={(data) => {
        const { id, name, sprites, types } = data;

        // @ts-ignore: PokeAPI not typed correctly for other images
        const src = sprites.other["official-artwork"].front_default;

        return (
          <div className="flex h-80 flex-col justify-between rounded-sm bg-slate-100 p-4 shadow-sm">
            <div className="h-3/5">
              <img src={src} alt={name} className="mx-auto h-full" />
            </div>

            <div className="shrink-0">
              <h1 className="text-xl font-bold">
                {capitalize(name)} #{id}
              </h1>

              <div className="mt-2 space-x-2">
                {types.map((type, i) => {
                  return <Badge key={i}>{capitalize(type.type.name)}</Badge>;
                })}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

type LoaderProps = ReturnType<typeof usePokemon> & {
  render: (data: PokeAPI.Pokemon) => React.ReactElement;
};

function Loader(props: LoaderProps) {
  const { data, render, isLoading, isFetching, error } = props;

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No Data</p>;

  return render(data.data);
}
