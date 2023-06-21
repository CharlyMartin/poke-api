import Badge from "../atoms/badge";
import PokemonLoader from "../loaders/pokemon";
import { usePokemon } from "../../hooks/use-pokemon";
import { capitalize } from "../../utils";

type Props = {
  name: string;
};

export default function Pokemon(props: Props) {
  const { name } = props;

  const response = usePokemon(name);

  return (
    <PokemonLoader
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
