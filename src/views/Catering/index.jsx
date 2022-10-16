import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { SubHeading } from '../../components';
import { content } from '../../constants';
import styles from './styles.module.scss';


const Catering = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			form.current,
			process.env.REACT_APP_PUBLIC_KEY,
		)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};
	return (
		<div className='app_bg white app_wrapper section_padding' id='catering'>
			<div className={styles.catering}>
				<div className={styles.catering_heading}>
					<SubHeading title='Catering Services' />
					<h1 className='headtext_cormorant'>{content.cateringHeader}</h1>
					<br />
					<p className={`${styles.catering_text} opensans`}>{content.caterMessage}</p>
				</div>

				<form ref={form} onSubmit={sendEmail} className={`${styles.catering_input} flex_center`}>
					<input
						type='text'
						placeholder='Enter your Name.'
						name="from_name"
						autoComplete='off'
					/>
					<input
						// className='app__contact-email-input'
						type="text"
						placeholder='Enter Phone Number'
						name='from_phone'
						autoComplete='off'
					/>
					<textarea
						className={`${styles.catering_textarea} flex_center`}
						name='message'
						rows="10"
						placeholder='Enter Catering Needs'>
					</textarea>
					<br />
					<button
						type="submit"
						value="Send"
						className='custom_button'>
						Send Email
					</button>
				</form>

			</div>
		</div>
	)
};

export default Catering;
