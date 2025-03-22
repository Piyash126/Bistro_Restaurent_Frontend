import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured_item text-white pt-10 my-10 bg-fixed'>
            <SectionTitle heading="Featured Item" subheading="check it out"></SectionTitle>
            <div className='flex justify-center items-center py-20 px-36 pb-20 pt-12 bg-slate-500 opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia suscipit aperiam velit eaque similique, dolorum quaerat repellat incidunt aliquid.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;