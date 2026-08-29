import { CharacterCard } from "../CharacterCard/CharacterCard";

/**
 * @param {{ characters: Array }} props
*/

export function CharacterGrid({ characters }) {
  if (characters.length === 0) {

    return (
      <p className="col-span-full py-10 text-center text-slate-400">
        Nenhum herói encontrado.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}