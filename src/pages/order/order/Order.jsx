import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const catrgories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams();
    const initialIndex=catrgories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);

    const [menu] = useMenu();
    console.log(category);
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro || Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
        </div >
    );
};

export default Order;