// components/CharacterBlock.tsx
import Image from 'next/image';
import React from 'react';

const CharacterBlock = () => {
  return (
    <div className="relative w-full h-full h-screen bg-no-repeat bg-cover text-white bg-block3">
      {/* Text block with black background and information */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 flex flex-col justify-center items-end p-10">
        <h1 className="text-4xl md:text-6xl font-bold">ANAKIN SKYWALKER</h1>
        <p className="text-xl md:text-2xl mt-2">41.9BBY</p>
      </div>

      {/* Information block */}
      <div className="absolute right-0 top-20 bottom-0 w-1/2 flex flex-col">
        <div className="bg-black bg-opacity-85 h-full backdrop-blur-sm rounded-lg py-12 px-16 text-sm md:text-base lg:text-lg flex flex-col gap-8 items-end">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Height: </p>
                    <p className='font-bold'> 188</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Mass: </p>
                    <p className='font-bold'> 188</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Hair: </p>
                    <p className='font-bold'> 188</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Skin: </p>
                    <p className='font-bold'> 188</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Eye: </p>
                    <p className='font-bold'> 188</p>
                    </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-4">
                <p className='text-gray-300'>Gender: </p>
                <p className='font-bold'> Male </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Species: </p>
                    <p className='font-bold'> 188</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className='text-gray-300'>Homeworld: </p>
                    <p className='font-bold'> 188</p>
                </div>
            </div>
          <div className='flex flex-col gap-2 items-end text-md'>
            <div className='text-gray-300'>Films:</div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-1">
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
             </div>
            </div>
            <div className='flex flex-col gap-2 items-end text-gray-300'>
            <div className='text-gray-300'>Starships:</div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-1">
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
             </div>
            </div>
            <div className='flex flex-col gap-2 items-end text-gray-300'>
            <div className='text-gray-300'>Vehicles:</div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-1">
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
                <span>Film</span>
             </div>
            </div>
        </div>
      </div>

      {/* Image positioned at the bottom of the block */}
      <div className="absolute left-1/2 -translate-x-3/4 w-1/2 bottom-0 flex justify-center items-end">
        <Image
          src="/images/character.png"  // Adjust this path to Anakin's image
          width={800}
          height={1000}
          objectFit="cover" // Ensures the image covers the allotted area without distortion
          alt="Anakin Skywalker"
        />
      </div>
    </div>
  );
};

export default CharacterBlock;
