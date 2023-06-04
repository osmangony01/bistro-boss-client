import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';

import imgMenu from '../../../public/menu/banner3.jpg';
import dessertImg from '../../../public/menu/dessert-bg.jpeg';
import pizzaImg from '../../../public/menu/pizza-bg.jpg';
import saladImg from '../../../public/menu/salad-bg.jpg';
import soupImg from '../../../public/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={imgMenu} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
            
            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
            
            {/* dessert menu item */}
            <MenuCategory items={desserts} title="dessert" coverImg={dessertImg}></MenuCategory>
            
            {/* pizza menu item */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
            
            {/* salad menu item */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>

             {/* salad menu item */}
             <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;