import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle heading="Order Online" subheading="From 11.00am to 10.00pm"></SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase -mt-16 text-center text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase -mt-16 text-center text-white'>Soup</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase -mt-16 text-center text-white'>Pizza</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase -mt-16 text-center text-white'>Desserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-3xl uppercase -mt-16 text-center text-white'>Drinks</h3>

                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;