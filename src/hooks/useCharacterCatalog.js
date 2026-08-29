import { useMemo, useState } from "react";
import { filterCharactersByName } from "../utils/filterCharactersByName";
import { paginateList, calculateTotalPages } from "../utils/paginateList";
import { useDebouncedValue } from "./useDebouncedValue";

const ITEMS_PER_PAGE = 8;

/**
 * @param {Array} characters 
 */
export function useCharacterCatalog(characters) {

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  const filteredCharacters = useMemo(
    () => filterCharactersByName(characters, debouncedSearchTerm),

    [characters, debouncedSearchTerm]
  );

  const totalPages = useMemo(
    () => calculateTotalPages(filteredCharacters.length, ITEMS_PER_PAGE),

    [filteredCharacters.length]
  );

  const paginatedCharacters = useMemo(
    () => paginateList(filteredCharacters, currentPage, ITEMS_PER_PAGE),

    [filteredCharacters, currentPage]
  );

  function updateSearchTerm(newSearchTerm) {
    setSearchTerm(newSearchTerm);

    setCurrentPage(1); // toda nova busca reinicia a paginação
  }

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return {
    searchTerm,

    currentPage,

    totalPages,

    paginatedCharacters,

    updateSearchTerm,
    
    goToPage,
  };
}