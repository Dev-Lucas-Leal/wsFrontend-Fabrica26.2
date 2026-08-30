import { getRoleConfig } from "../../constants/heroRoles";

/**
 * @param {{ character: { id: string, name: string, portrait: string, role: string } }} props
 */
export function CharacterCard({ character }) {
  const { label, colorClass, Icon } = getRoleConfig(character.role);

  return (
    <article className="group overflow-hidden rounded-xl bg-slate-800 shadow-lg transition hover:-translate-y-1 hover:shadow-orange-500/20">

      <div className="overflow-hidden">

        <img
          src={character.portrait}
          alt={`Retrato de ${character.name}`}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold text-white">{character.name}</h3>

        <span
          className={`mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase ${colorClass}`}
        >

          <Icon className="h-3.5 w-3.5" />

          {label}

        </span>

      </div>

    </article>
  );
}