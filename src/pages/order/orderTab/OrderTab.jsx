import React from 'react';
import FoodCard from '../../../components/foodcard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;