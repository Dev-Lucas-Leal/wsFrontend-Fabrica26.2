import { CoverBanner } from "../components/CoverBanner/CoverBanner";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CharacterGrid } from "../components/CharacterGrid/CharacterGrid";
import { Pagination } from "../components/Pagination/Pagination";
import { LoadingState } from "../components/LoadingState/LoadingState";
import { ErrorState } from "../components/ErrorState/ErrorState";
import { useCharacters } from "../hooks/useCharacters";
import { useCharacterCatalog } from "../hooks/useCharacterCatalog";

export function HomePage() {
  const { characters, isLoading, error } = useCharacters();

  const {
    searchTerm,
    currentPage,
    totalPages,
    paginatedCharacters,
    updateSearchTerm,
    goToPage,
  } = useCharacterCatalog(characters);

  return (
    <main className="min-h-screen bg-slate-950">

      <CoverBanner />

      <section className="mx-auto max-w-6xl px-4 py-10">

        <SearchBar searchTerm={searchTerm} onSearchTermChange={updateSearchTerm} />

        <div className="mt-8">

          {isLoading && <LoadingState />}

          {!isLoading && error && <ErrorState message={error} />}

          {!isLoading && !error && (
            <>
              <CharacterGrid characters={paginatedCharacters} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </>
          )}

        </div>

      </section>
      
    </main>
  );
}