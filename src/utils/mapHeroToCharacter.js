/** 
 *@param {{key: string, name: string, portrait: string, role: string}} hero
 *@returns {{id: string, name: string, portrait: string, role: string}}
*/ 
export function mapHeroToCharacter(hero) {
  return {
    id: hero.key,

    name: hero.name,

    portrait: hero.portrait,
    
    role: hero.role,
  };
}