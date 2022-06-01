
export const buscaPorNome = async (pokemon) => {
    const fetchApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const fetchApiJson = await fetchApi.json();
    return fetchApiJson;
}

export const buscaTodosOsPokemon = async () => {
    const fetchApi = await fetch(`https://pokeapi.co/api/v2/pokedex/1`);
    const fetchApiJson = await fetchApi.json();
    return fetchApiJson;
}

export const buscaPorTipo = async (tipo) => {
    const fetchApi = await fetch(`https://pokeapi.co/api/v2//type/${tipo}`);
    const fetchApiJson = await fetchApi.json();
    return fetchApiJson;
}
