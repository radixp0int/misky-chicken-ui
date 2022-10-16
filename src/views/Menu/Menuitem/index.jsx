import styles from './styles.module.scss';

const MenuItem = ({ title, price, tags }) => (
	<div className={styles.menuitem_container}>
		<div className={styles.menuitem_head}>
			<div className={styles.menuitem_name}>
				<p className={`${styles.menuitem_title} cormorant`}>{title}</p>
			</div>
			<div className={styles.menuitem_dash} />
			<div className={styles.menuitem_price}>
				<p className='cormorant'>${price}</p>
			</div>
		</div>
		<div className={styles.menuitem_sub}>
			<p className={`${styles.menuitem_tag} opensans menu`}>{tags}</p>
		</div>
	</div>
);

export default MenuItem;
