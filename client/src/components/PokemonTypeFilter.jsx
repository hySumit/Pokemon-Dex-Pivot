import React from "react";

const PokemonTypeFilter = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const typeColors = {
    fire: "#ff7402",
    grass: "#33a165",
    steel: "#00858a",
    water: "#0050ac",
    psychic: "#c90086",
    ground: "#d4a55d",
    ice: "#70deff",
    flying: "#5d4e75",
    ghost: "#4d5b64",
    normal: "#753845",
    poison: "#7e0058",
    rock: "#6e1a00",
    fighting: "#634136",
    dark: "#272625",
    bug: "#6e1a00",
    dragon: "#00c431",
    electric: "#f7ba02",
    fairy: "#d31c81",
    unknown: "#757575",
    shadow: "#29292c",
  };

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {availableTypes.map((type) => (
        <button
          key={type}
          style={{
            backgroundColor: selectedTypes.includes(type) ? typeColors[type] : undefined
          }}
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            selectedTypes.includes(type)
              ? "text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } capitalize`}
          onClick={() => toggleType(type)}
          aria-pressed={selectedTypes.includes(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;