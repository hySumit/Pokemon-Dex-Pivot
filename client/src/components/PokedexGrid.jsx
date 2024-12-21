import React, { useState, Suspense } from "react";
import { usePokemon } from "./context/PokemonContext";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const PokedexGrid = ({ selectedTypes }) => {
  const { pokemonList, isLoading, isError } = usePokemon();
  const [searchTerm, setSearchTerm] = useState("");

  if (isError) return <div>Error loading Pokémon data.</div>;

  const filteredPokemon = pokemonList.filter((pokemon) => {
    if (!pokemon || !pokemon.name || !pokemon.types) return false;

    // search name or ID
    const matchesSearch = 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm);

    // select types
    const matchesType =
      selectedTypes.length === 0 ||
      pokemon.types.some((type) => selectedTypes.includes(type));

    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by name or ID..."
        className="border p-2 w-full mb-4 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search Pokémon by name or ID"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (

          // skeletons 
          [...Array(8)].map((_, index) => (
            <PokemonCardSkeleton key={`skeleton-${index}`} />
          ))
        ) : (

          // cards
          filteredPokemon.map((pokemon) => (
            <Suspense
              key={pokemon.id}
              fallback={<PokemonCardSkeleton />}
            >
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                sprite={pokemon.sprite}
                stats={pokemon.stats}
                height={pokemon.height}
                weight={pokemon.weight}
                abilities={pokemon.abilities}
              />
            </Suspense>
          ))
        )}
      </div>
    </div>
  );
};

export default PokedexGrid;