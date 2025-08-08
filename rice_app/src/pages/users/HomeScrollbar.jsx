
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  // '/src/assets/banner-img.png',
  'https://images.pexels.com/photos/12922964/pexels-photo-12922964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1602989106211-81de671c23a9?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGZpZWxkfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
  '/src/assets/p-2.jpg',
  '/src/assets/p-3.avif',
  '/src/assets/p-4.jpg',
];

const HomeScrollbar = () => {
  return (
    <div className="home-slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="slider-image-wrapper">
              <img src={img} alt={`Rice slide ${idx + 1}`} className="slider-image" />
              <div className="overlay-text">
                <h2>Welcome to Rice-World</h2>
                <p>Premium Quality Rice From Our Fields to Your Home</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeScrollbar;

