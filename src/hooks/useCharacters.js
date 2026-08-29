import {useEffect, useState } from "react";
import { getHeroes } from "../services/overfastApi";
import { mapHeroToCharacter } from "../utils/mapHeroToCharacter";

export function useCharacters() {
  const [characters, setCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(true); 

  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCharacters() {
      try {
        const rawHeroes = await getHeroes(abortController.signal);

        const mappedCharacters = rawHeroes.map(mapHeroToCharacter);
        
        setCharacters(mappedCharacters);

      } catch (fetchError) {
        if (fetchError.name === "AbortError") return;
        
        setError("Não foi possível carregar os heróis. Tente novamente.");
        
      } finally {
        setIsLoading(false);
      }
    }

    
    fetchCharacters();

    return () => abortController.abort();
  }, []); 

  return { characters, isLoading, error };
}

