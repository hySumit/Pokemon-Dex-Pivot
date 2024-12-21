import React from "react";

const StatBarSkeleton = () => (
  <div className="w-full mb-2">
    <div className="flex justify-between mb-1">
      <div className="h-4 w-16 bg-gray-300/20 rounded animate-pulse"></div>
      <div className="h-4 w-8 bg-gray-300/20 rounded animate-pulse"></div>
    </div>
    <div className="w-full bg-gray-300/20 rounded-md h-[20px] animate-pulse"></div>
  </div>
);

const PokemonCardSkeleton = () => (
  <div className="relative border rounded-lg p-4 shadow-md flex flex-col items-center overflow-hidden min-h-[700px] bg-gray-400">
    
    {/* Type Icon Skeleton */}
    <div className="w-32 h-12 bg-gray-300/20 rounded animate-pulse"></div>

    {/* Image Skeleton */}
    <div className="relative mt-2 w-[200px] h-[200px] bg-gray-300/20 rounded animate-pulse"></div>

    <div className="w-full space-y-4 mt-4">
      {/* ID Skeleton */}
      <div className="absolute top-[15%] left-2 w-16 h-6 bg-gray-300/20 rounded animate-pulse"></div>

      {/* Name Skeleton */}
      <div className="w-32 h-6 mx-auto bg-gray-300/20 rounded animate-pulse mb-4"></div>

      {/* Physical Attributes Skeleton */}
      <div className="flex justify-between mb-4">
        <div className="w-24 h-4 bg-gray-300/20 rounded animate-pulse"></div>
        <div className="w-24 h-4 bg-gray-300/20 rounded animate-pulse"></div>
      </div>

      {/* Abilities Skeleton */}
      <div className="mb-4">
        <div className="w-20 h-5 bg-gray-300/20 rounded animate-pulse mb-2"></div>
        <div className="flex flex-wrap gap-2">
          <div className="w-20 h-6 bg-gray-300/20 rounded-full animate-pulse"></div>
          <div className="w-20 h-6 bg-gray-300/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="space-y-3">
        {[...Array(6)].map((_, index) => (
          <StatBarSkeleton key={index} />
        ))}
      </div>
    </div>
  </div>
);

export default PokemonCardSkeleton;