// components/FilmCarousel.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'; // Import Swiper core and required modules
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles (for structure, not for visible buttons)
import 'swiper/css/pagination'; // Pagination styles
import Image from 'next/image';
import { Film } from '../types';

interface FilmCarouselProps {
    films: Film[];
    initialSlideIndex?: number;
}

const FilmCarousel: React.FC<FilmCarouselProps> = ({ films, initialSlideIndex = 3  }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  // Callback to update swiper instance
  const onSwiper = useCallback((swiperInstance: SwiperCore) => {
    setSwiper(swiperInstance);
  }, []);


  // Effect to ensure swiper updates when films change
  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [films, swiper]);

  return (
    <div className="relative w-full overflow-hidden px-16 py-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        navigation={false} // Disable default navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        initialSlide={initialSlideIndex}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        onSwiper={onSwiper}
      >
        {films.map((film) => (
          <SwiperSlide key={film._id}>
            <div className="flex flex-col md:flex-row bg-black60 rounded-lg shadow-lg p-4 md:p-8 gap-4 md:gap-8 items-center mb-6">
              <Image src={film.image || "/images/film-element.png"} alt={film.title} width={200} height={300} className="rounded-md" />
              <div className="text-center md:text-left">
                <span className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-semibold'>{film.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {swiper && (
        <>
          <button onClick={() => swiper.slidePrev()} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-red-300 text-lg">
            ←
          </button>
          <button onClick={() => swiper.slideNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-red-300 text-lg">
            →
          </button>
        </>
      )}
    </div>
  );
};

export default FilmCarousel;
