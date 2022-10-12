import React from 'react';
import MenuItem from './Menuitem';
import { SubHeading, Button } from '../../components'
import { images, data } from '../../constants';

import styles from './styles.module.scss';

const Menu = () => {

    return (
        <div id='menu' className={`${styles.special} flex_center section_padding`} >
            <div className={styles.special_title}>
                <SubHeading title='Featured Menu' />
                <h1 className='headtext_cormorant'>Today's Dishes</h1>
            </div>
            {/* {menu && */}
            <div className={styles.special_menu}>
                <div className={`${styles.special_menu_logo}  flex_center`}>
                    <p className={styles.special_menu_heading}>Featured Plates</p>
                    <div className={styles.special_menu_items}>
                        {data.menu.map((dish, index) => (
                            <MenuItem
                                key={'leftitem-' + index}
                                title={dish.name}
                                price={dish.price}
                                tags={dish.description}
                            />
                        ))}
                    </div>
                </div>


                <div className={styles.special_menu_img}>
                    <img src={images.logo} alt='menu' />
                </div>

                <div className={`${styles.special_menu_cocktails} flex_center`}>
                    <p className={styles.special_menu_heading}>Combo Specials</p>
                    <div className={styles.special_menu_items}>
                        {data.combos.map((special, index) => (
                            <MenuItem
                                key={'rightitem-' + index}
                                title={special.name}
                                price={special.price}
                                tags={special.description} />
                        ))}
                    </div>
                </div>
            </div>
            <Button name='View Catering' path='#catering' />
        </div>
    )
}

export default Menu;
