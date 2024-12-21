import React, { useState } from "react";
import { PokemonProvider } from "./components/context/PokemonContext";
import PokedexGrid from "./components/PokedexGrid";
import PokemonTypeFilter from "./components/PokemonTypeFilter";
import { FaGithub } from "react-icons/fa";

const App = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  return (
    <PokemonProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          Pokémon Explorer- Sumit Kumar
          <span className="m-1">
            <a href="https://github.com/hySumit">
              <FaGithub />
            </a>
          </span>
        </h1>
        <PokemonTypeFilter
          availableTypes={[
            "grass",
            "fire",
            "water",
            "electric",
            "rock",
            "normal",
            "ghost",
          ]}
          selectedTypes={selectedTypes}
          onTypeSelect={setSelectedTypes}
        />
        <PokedexGrid selectedTypes={selectedTypes} />
      </div>
    </PokemonProvider>
  );
};

export default App;
