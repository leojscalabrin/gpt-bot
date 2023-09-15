const axios = require("axios");

async function getPokemon(pokemon) {
  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar informações do Pokémon: ${error.message}`);
    throw error;
  }
}

async function pokeApi(pokemon) {
    try {
      const data = await getPokemon(pokemon);
      return data;
    } catch (error) {
      throw error;
    }
  }

module.exports = { pokeApi };
