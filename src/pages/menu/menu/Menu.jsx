import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category === "dessert");
    const soup=menu.filter(item=>item.category === "soup");
    const salad=menu.filter(item=>item.category === "salad");
    const pizza=menu.filter(item=>item.category === "pizza");
    const offered=menu.filter(item=>item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Bos || Menu</title>
            </Helmet>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <SectionTitle subheading="Do't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;