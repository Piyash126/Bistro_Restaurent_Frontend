import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaColonSign } from "react-icons/fa6";

const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle subheading="What Our Client Say" heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review=><SwiperSlide key={review._id} review={review}>
                        <div className='m-16 flex flex-col items-center gap-4'>
                            <div className='flex gap-1'>
                            <FaColonSign /><FaColonSign />
                            </div>
                        
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
                
            </Swiper>
        </section>
    );
};

export default Testimonials;