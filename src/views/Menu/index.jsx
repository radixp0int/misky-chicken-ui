import React, { useState, useEffect } from 'react';
import { client } from '../../sanity';

import MenuItem from './Menuitem';
import { SubHeading, Button } from '../../components'
import { images } from '../../constants';

import styles from './styles.module.scss';

const Menu = ({ date }) => {
    function getDayOfWeek() {
        return (date.getDay() === 6 || date.getDay() === 0) ? 'weekend' : 'weekday';
    }

    const [specials, setSpecials] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const queryMenu = `*[_type == "featuredMenu"]`;
        const querySpecials = '*[_type == "specials"]';

        client.fetch(querySpecials)
            .then((data) => { setSpecials(data) })
            .catch(console.error);

        client.fetch(queryMenu)
            .then((data) => { setMenu(data) })
            .catch(console.error);
    }, []);

    return (
        <div id='menu' className={`${styles.special} flex_center section_padding`} >
            <div className={styles.special_title}>
                <SubHeading title='Featured Menu' />
                <h1 className='headtext_cormorant'>Misky Chicken</h1>
            </div>

            <div className={styles.special_menu}>
                <div className={`${styles.special_menu_logo}  flex_center`}>
                    <p className={styles.special_menu_heading}>Featured Items</p>
                    <div className={styles.special_menu_items}>
                        {menu.map((dish, index) => (
                            (dish.options === 'All-Week' || dish.options.toLowerCase() === getDayOfWeek()) &&
                            <MenuItem
                                key={'leftMenu-' + index}
                                title={dish.name}
                                price={dish.price}
                                tags={dish.description}
                            />
                        ))}
                    </div>
                </div>

                <div className={`${styles.special_menu_img} flex_center`}>
                    <img src={images.logo} alt='menu' />
                </div>

                <div className={`${styles.special_menu_cocktails} flex_center`}>
                    <p className={styles.special_menu_heading}>Specials</p>
                    <div className={styles.special_menu_items}>
                        {specials.map((special, index) => (
                            <MenuItem
                                key={'rightMenu-' + index}
                                title={special.name}
                                price={special.price}
                                tags={special.description} />
                        ))}
                    </div>
                </div>
            </div>
            <Button name='View Catering' href='#catering' />
        </div>
    )
}

export default Menu;
