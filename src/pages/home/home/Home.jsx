import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import Boss from '../boss/Boss';
import PopularMenu from '../popularMenu/PopularMenu';
import Featured from '../featured/Featured';
import Testimonials from '../testimonials/Testimonials';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;