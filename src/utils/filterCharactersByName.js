/**
 * @param {Array<{name: string}>} characters
 * @param {string} searchTerm
 * @returns {Array<object>}
 */

export function filterCharactersByName(characters, searchTerm){
    if (!Array.isArray(characters)) return [];

    if (!searchTerm || typeof searchTerm !== 'string') return characters;

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if(!normalizedSearchTerm){
        return characters;
    }

    return characters.filter((character) => {
    const heroName = character?.name ? String(character.name).toLowerCase() : '';

    return heroName.includes(normalizedSearchTerm);

    });

}