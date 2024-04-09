import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (

        <div
            className='relative'
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="h-96 md:h-[600px]"
            >
                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/j4KsD4H/pexels-binyamin-mellish-186077.jpg)' }}
                ></SwiperSlide>
                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/VLbt1Wb/pexels-alex.jpg)' }}
                ></SwiperSlide>
                <SwiperSlide
                    className='bg-cover bg-no-repeat bg-center'
                    style={{ backgroundImage: 'url(https://i.ibb.co/JRs8WGR/pexels-pixabay-302769.jpg)' }}
                ></SwiperSlide>
            </Swiper>
            <div
                id="banner"
                className='text-2xl md:text-3xl p-3 md:p-8 lg:text-5xl text-slate-100 md:w-2/3 absolute bottom-3 left-3 z-10 shadow-2xl bg-slate-900 rounded-sm bg-opacity-20 mr-3'
            >
                Reindeer Real Estate: Find Your Perfect Fit: <br />- Homes, Townhomes, Apartments, Vacation Rentals ...
            </div>
        </div>
    );
};

export default Header;






{/* <div
    className='h-[600px] bg-cover bg-no-repeat bg-center text-slate-100'
    id="banner"
    style={{ backgroundImage: 'url(https://i.ibb.co/VLbt1Wb/pexels-alex.jpg)' }}
>
    <div className='h-[600px] text-center flex justify-center items-center bg-base-300 bg-opacity-20'>
        <h3 className='text-3xl lg:text-5xl md:w-2/3'>Reindeer Real Estate: Find Your Perfect Fit: <br />- Homes, Townhomes, Apartments, Vacation Rentals ...</h3>
    </div >
</div > */}