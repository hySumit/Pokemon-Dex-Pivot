// import React from "react";
import React, { lazy, Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

const symbol = {
  fire: "🔥",
  grass: "🌿",
  steel: "⛓️",
  water: "💧",
  psychic: "💢",
  ground: "🕳️",
  ice: "❄️",
  flying: "🪽",
  ghost: "👻",
  normal: "🎈",
  poison: "🧪",
  rock: "🪨",
  fighting: "💪🏻",
  dark: "🌚",
  bug: "🐞",
  dragon: "🐲",
  electric: "⚡",
  fairy: "🧚🏻‍♀️",
  unknown: "🎭",
  shadow: "🎃",
};


const StatBar = ({ label, value, maxValue = 255 }) => (
    <div className="w-full mb-2">
      <div className="flex justify-between text-xs text-white mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-[#d4d4d4b2] rounded-md h-[20px]">
        <div
          className="bg-[#f8f8f8bb] rounded-md h-[20px] transition-all duration-500 ease-out"
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
  
  const PokemonCard = ({ id, name, types, sprite, stats, height, weight, abilities }) => {
    const cardBackgroundColor = typeColors[types[0]] || "#757575";
    const emoji = symbol[types[0]] || "❔";
  
    return (
      <div
        className="relative border rounded-lg p-4 shadow-md flex flex-col items-center overflow-hidden min-h-[700px] transition-all duration-300"
        style={{ backgroundColor: cardBackgroundColor }}
      >
        <span className="typeBg uppercase text-white text-5xl font-bold">
          {emoji}{types[0]}
        </span>
  
        <LazyLoadImage
          src={sprite}
          alt={name}
          effect="blur"
          className="img relative mt-2 w-[200px] h-[200px] z-10"
          placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
        />
  
        <div className="w-full space-y-4">
          <p className="absolute top-[15%] left-2 text-[#f7f7f785] text-xl font-bold">
            #{id}
          </p>
          <h2 className="relative font-bold text-white text-xl capitalize z-10 text-center mb-4">
            {name}
          </h2>
  
          <div className="flex justify-between text-white text-sm mb-4">
            <span>Height: {height}m</span>
            <span>Weight: {weight}kg</span>
          </div>
  
          <div className="text-white text-sm mb-4">
            <p className="font-bold mb-1">Abilities:</p>
            <div className="flex flex-wrap gap-2">
              {abilities.map((ability) => (
                <span
                  key={ability}
                  className="bg-white/20 px-2 py-1 rounded-full capitalize"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
  
          <div className="space-y-2">
            <StatBar label="HP" value={stats.hp} />
            <StatBar label="Attack" value={stats.attack} />
            <StatBar label="Defense" value={stats.defense} />
            <StatBar label="Special Attack" value={stats.specialAttack} />
            <StatBar label="Special Defense" value={stats.specialDefense} />
            <StatBar label="Speed" value={stats.speed} />
          </div>
        </div>
      </div>
    );
  };
  
  export default PokemonCard;