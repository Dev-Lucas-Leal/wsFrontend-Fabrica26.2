/**
 * @param {{ searchTerm: string, onSearchTermChange: (value: string) => void }} props
 */

export function SearchBar({ searchTerm, onSearchTermChange }) {
  function handleInputChange(event) {

    onSearchTermChange(event.target.value);

  }

  return (
    <div className="mx-auto w-full max-w-md">

      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Pesquisar herói..."
        aria-label="Pesquisar herói"
        className="w-full rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-white placeholder-slate-400 outline-none transition focus:border-orange-500"
      />
      
    </div>
  );
}