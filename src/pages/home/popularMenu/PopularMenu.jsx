import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuItem from '../../shared/menuitem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popularItems=menu.filter(item=>item.category === "popular");
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category === "popular");
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className='mb-10'>
            <SectionTitle heading="From Our Menu" subheading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popularItems.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;