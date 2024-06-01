// components/CharacterBlock.tsx
import Image from 'next/image';
import React from 'react'; // Adjust the path if necessary

const films = [
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith'
];

const starships = [
    'CR90 corvette',
    'Star Destroyer',
    'Sentinel-class landing craft',
    'Death Star',
    'Millennium Falcon',
    'Y-wing',
];

const vehicles = [
    'Sand Crawler',
    'T-16 skyhopper',
    'X-34 landspeeder',
    'TIE/LN starfighter',
    'Snowspeeder',
    'TIE bomber',
];

const properties = [
    {'Height':'188'},
    {'Mass':'84'},
    {'Hair':'blond'},
    {'Skin':'fair'},
    {'Eye':'blue'},
];

const properties2 = [
    {'Gender': 'Male'},
    {'Homeworld': 'Tatooine'},
    {'Species': 'Human'}
];

const CharacterBlock = () => {
  return (
    <div className="relative w-full h-full min-h-screen bg-no-repeat bg-cover text-white bg-block3 overflow-hidden">
      {/* Text block with black background and information */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-center items-end p-4 md:p-10">
        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-right">ANAKIN SKYWALKER</h1>
        <p className="text-lg md:text-2xl mt-2 text-center md:text-right">41.9BBY</p>
      </div>

      {/* Information block */}
      <div className="absolute right-0 top-20 bottom-0 w-full md:w-1/2 flex flex-col bg-black bg-opacity-85 p-8 h-full backdrop-blur-sm rounded-xl sm:p-8 md:pl-36 md:pr-8 lg:pr-16 lg:pl-52 text-sm md:text-base lg:text-lg gap-8 items-end overflow-auto">
        <div className="flex flex-row gap-4 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="flex flex-col gap-2 md:gap-4">
              <p className="text-gray-300">{Object.keys(property)[0]}:</p>
              <p className="font-bold">{Object.values(property)[0]}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 gap-8">
          {properties2.map((property, index) => (
            <div key={index} className="flex flex-col gap-2 md:gap-4">
              <p className="text-gray-300">{Object.keys(property)[0]}:</p>
              <p className="font-bold">{Object.values(property)[0]}</p>
            </div>
          ))}
        </div>

        <div className="lg:flex lg:flex-col gap-2 items-end text-sm">
          <div className="text-gray-300">Films:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 font-bold">
            {films.map((film, index) => (
              <span key={index} className="text-right">{film}</span>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-col gap-2 items-end text-sm">
          <div className="text-gray-300">Starships:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 font-bold">
            {starships.map((film, index) => (
              <span key={index} className="text-right">{film}</span>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-col gap-2 items-end text-sm">
          <div className="text-gray-300">Vehicles:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 font-bold">
            {vehicles.map((film, index) => (
              <span key={index} className="text-right">{film}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Image positioned at the bottom of the block */}
      <div className="absolute left-1/2 -translate-x-3/4 w-3/4 md:w-1/2 bottom-0 flex justify-center items-end">
        <Image
          src="/images/character.png"  // Adjust this path to Anakin's image
          width={650}
          height={850}
          objectFit="cover" // Ensures the image covers the allotted area without distortion
          alt="Anakin Skywalker"
        />
      </div>
    </div>
  );
};

export default CharacterBlock;

