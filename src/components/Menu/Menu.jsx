import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';

import imgMenu from '../../../public/menu/banner3.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={imgMenu} title="Our Menu"></Cover>
            Menu
        </div>
    );
};

export default Menu;