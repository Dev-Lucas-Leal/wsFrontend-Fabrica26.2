import { Search } from "lucide-react";

/**
 * @param {{ searchTerm: string, onSearchTermChange: (value: string) => void }} props
 */

export function SearchBar({ searchTerm, onSearchTermChange }) {
  function handleInputChange(event) {

    onSearchTermChange(event.target.value);
  }

  return (

    <div className="relative mx-auto w-full max-w-md">

      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Pesquisar herói..."
        aria-label="Pesquisar herói"
        className="w-full rounded-full border border-slate-700 bg-slate-800 py-3 pl-11 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-orange-500"
      />
      
    </div>
  );
}