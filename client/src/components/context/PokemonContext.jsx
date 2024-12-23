import axios from "axios";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const PokemonContext = createContext(null);

const PokemonProvider = ({ children }) => {
  
  const url = "https://pokeapi.co/api/v2/pokemon?limit=152";

  const { data, isLoading, isError } = useQuery(["pokemon"], async () => {
    const response = await axios.get(url);
    const results = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          id: details.data.id,
          name: details.data.name,
          types: details.data.types.map((type) => type.type.name),
          sprite: details.data.sprites.other["official-artwork"].front_default,
          
          // stats data
          stats: {
            hp: details.data.stats[0].base_stat,
            attack: details.data.stats[1].base_stat,
            defense: details.data.stats[2].base_stat,
            specialAttack: details.data.stats[3].base_stat,
            specialDefense: details.data.stats[4].base_stat,
            speed: details.data.stats[5].base_stat,
          },
          // physical data 
          height: details.data.height / 10, 
          weight: details.data.weight / 10, 
          abilities: details.data.abilities.map((ability) => ability.ability.name),
        };
      })
    );
    return results;
  });

  return (
    <PokemonContext.Provider value={{ pokemonList: data || [], isLoading, isError }}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};

export { PokemonProvider, usePokemon };
