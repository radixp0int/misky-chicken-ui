import React from 'react';
import MenuItem from './Menuitem';
import { SubHeading } from '../../components'
import { images, data } from '../../constants';

import './SpecialMenu.scss';

const menu = [
    {
        name: 'Lomo Saltado',
        description: 'Steak strips sautéed with tomatoes and onions, served with French fries and rice.',
        price: 17.99,
        options: 'All-Week',
    },
    {
        name: 'Pollo Saltado',
        description: 'Chicken strips sautéed with tomatoes and onions, served with French fries and rice.',
        price: 16.99,
        options: 'Weekdays',
    },
    {
        name: 'Papa Rellena',
        description: 'I am a good web developer.',
        price: 9.99,
        options: 'All-Week'
    },
    {
        name: 'Arroz Chaufa',
        description: 'Chicken fried rice. Rice with assorted ingredients of Peruvian cuisine and Chinese.',
        price: 14.99,
        options: 'Weekend'
    },
    {
        name: 'Milanesa De Pollo',
        description: 'Panned fried chicken breast served with red onions marinated in lemon juice, French fries and rice.',
        price: 19.99,
        options: 'Weekend'
    },
]

const SpecialMenu = () => (
    <div id='menu' className='app__specialMenu flex__center section__padding'>
        <div className='app__specialMenu-title'>
            <SubHeading title='Menu that fits your pallet' />
            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>

        <div className='app__specialMenu-menu'>
            <div className='app__specialMenu-menu_wine flex__center'>
                <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
                <div className='app__specialMenu_menu_items'>
                    {data.wines.map((wine, index) => (
                        <MenuItem
                            key={'litem-' + index}
                            title={wine.title}
                            price={wine.price}
                            tags={wine.tags} />
                    ))}
                </div>
            </div>


            {/* <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu img' />
      </div> */}

            <div className='app__specialMenu-menu_cocktails flex__center'>
                <p className='app__specialMenu-menu_heading'>Cocktails</p>
                <div className='app__specialMenu_menu_items'>
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem
                            key={'ritem-' + index}
                            title={cocktail.title}
                            price={cocktail.price}
                            tags={cocktail.tags} />
                    ))}
                </div>
            </div>
        </div>

        <div style={{ marginTop: '15px' }}>
            <button type='button' className='custom__button'>
                View Full Menu
            </button>
        </div>
    </div>
);

export default SpecialMenu;
