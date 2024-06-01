import React from 'react';
import { Planet } from '../types';

const BaseCard = ({ planet }: { planet: Planet }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg border border-blue-500 transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-b from-gray-900 to-blue-600 p-4 rounded-t-lg">
        <h2 className="text-3xl font-extrabold text-yellow-300 tracking-wide">{planet.name}</h2>
      </div>
      <div className="p-6 bg-gray-800 rounded-b-lg">
        <p className="text-blue-300">Population: {planet.population}</p>
        <p className="text-blue-300">Terrain: {planet.terrain}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 hover:scale-110">
          Explore
        </button>
      </div>
    </div>
  );
};

export default BaseCard;
