import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


const Header = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default Header;






// <div
//     className='h-[600px] bg-cover bg-no-repeat bg-center text-slate-100'
//     id="banner"
//     style={{ backgroundImage: 'url(https://i.ibb.co/VLbt1Wb/pexels-alex.jpg)' }}
// >
//     <div className='h-[600px] text-center flex justify-center items-center bg-base-300 bg-opacity-20'>
//         <h3 className='text-3xl lg:text-5xl md:w-2/3'>Reindeer Real Estate: Find Your Perfect Fit: <br />- Homes, Townhomes, Apartments, Vacation Rentals ...</h3>
//     </div >
// </div >