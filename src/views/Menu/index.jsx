import React from 'react';
import MenuItem from './Menuitem';
import { SubHeading, Button } from '../../components'
import { images, data } from '../../constants';

import styles from './styles.module.scss';

const Menu = () => {
    // const food = chooseByType(info, 'food')
    // const drink = chooseByType(info, 'drink')

    // const chooseByType = (data, slugName) => {
    //     if (data && slugName) {
    //         const chooseBySlug = data?.filter(content => Object.values(content).includes(slugName));
    //         return chooseBySlug ? chooseBySlug[0] : [];
    //     }
    // }
    return (
        <div id='menu' className={`${styles.special} flex_center section_padding`} >
            <div className={styles.special_title}>
                <SubHeading title='Menu & Specials' />
                <h1 className='headtext_cormorant'>Today's Special</h1>
            </div>
            {/* {menu && */}
            <div className={styles.special_menu}>
                <div className={`${styles.special_menu_logo}  flex_center`}>
                    <p className={styles.special_menu_heading}>Combo Specials</p>
                    <div className={styles.special_menu_items}>
                        {data.wines.map((wine, index) => (
                            <MenuItem
                                key={'leftitem-' + index}
                                title={wine.title}
                                price={wine.price}
                                tags={wine.tags} />
                        ))}
                    </div>
                </div>


                <div className={styles.special_menu_img}>
                    <img src={images.logoMenu} alt='menu' />
                </div>

                <div className={`${styles.special_menu_cocktails} flex_center`}>
                    <p className={styles.special_menu_heading}>Cocktails</p>
                    <div className={styles.special_menu_items}>
                        {data.cocktails.map((cocktail, index) => (
                            <MenuItem
                                key={'rightitem-' + index}
                                title={cocktail.title}
                                price={cocktail.price}
                                tags={cocktail.tags} />
                        ))}
                    </div>
                </div>
            </div>
            <Button name='View More' path='#gallery' />
        </div>
    )
}

export default Menu;
