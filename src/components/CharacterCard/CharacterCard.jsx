const ROLE_LABELS = {
  tank: "Tanque",
  damage: "Dano",
  support: "Suporte",
};


/**
 * @param {{ character: { id: string, name: string, portrait: string, role: string } }} props
 */

export function CharacterCard({ character }) {
  const roleLabel = ROLE_LABELS[character.role] ?? character.role;

  return (
    <article className="group overflow-hidden rounded-xl bg-slate-800 shadow-lg transition hover:-translate-y-1 hover:shadow-orange-500/20">

      <img
        src={character.portrait}
        alt={`Retrato de ${character.name}`}
        className="h-56 w-full object-cover"
        loading="lazy"
      />

      <div className="p-4">

        <h3 className="text-lg font-bold text-white">{character.name}</h3>

        <span className="mt-1 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase text-orange-400">
          {roleLabel}
        </span>

      </div>
      
    </article>
  );
}