import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Icon {
  name: string;
  url: string;
}

const icons: Icon[] = [
  { name: 'FILMS', url: '/icons/film-icon.png' },
  { name: 'PLANETS', url: '/icons/planet-icon.png' },
  { name: 'SPECIES', url: '/icons/species-icon.png' },
  { name: 'STARSHIPS', url: '/icons/starship-icon.png' },
  { name: 'VEHICLES', url: '/icons/vehicles-icon.png' },
  { name: 'CHARACTER', url: '/icons/characters-icon.png' },
];

const Intro: React.FC = () => {
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-block1 bg-cover bg-no-repeat h-screen p-8 pt-16">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="flex items-center justify-center">
          <Link href="/" className="block w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
              <Image
                src="/icons/logo-starwars.png"
                alt="main icon"
                width={200}
                height={200}
                layout="responsive"
                priority={true}
                className="object-contain"
                quality={100}
              />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:gap-16 lg:gap-4 gap-4 sm:gap-16 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
          {icons.map((icon) => (
            <Link href={`#${icon.name}`} onClick={() => scrollToSection(icon.name)} key={icon.url} className="block w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transform hover:scale-110 transition duration-300">
                <Image
                  src={icon.url}
                  alt={icon.name}
                  layout="responsive"
                  width={100}
                  height={100}
                  priority={true}
                  className="object-contain"
                />
                <div className="text-white text-sm md:text-base lg:text-lg font-bold text-center mt-2">
                  {icon.name}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
