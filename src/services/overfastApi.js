const BASE_URL = "https://overfast-api.tekrop.fr";

/**
 * @param {AbortSignal} signal 
 * @returns {Promise<Array<{key: string, name: string, portrait: string, role: string}>>}
 */

export async function getHeroes(signal){
    try{
    const response = await fetch(`${BASE_URL}/heroes`, { signal });

    if(!response.ok){
        throw new Error(`erro ao buscar os heróis na Api: ${response.status} - ${response.statusText}`);
    }
     
    return await response.json();

    }catch(error){
        if(error.name === "AbortError"){
            console.log("Requisição cancelada.");

            return[];
        }
        console.error(error);

        console.log("Falha ao buscar lista dos heróis na Api.",error);

        throw new Error("Não foi possível carregar os heróis.",{cause: error});
    }
}

