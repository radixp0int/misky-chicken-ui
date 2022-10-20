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
				form.current.reset();
				alert("Thank you for contacting Misky Chicken!")
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

				<form
					ref={form}
					onSubmit={sendEmail}
					className={`${styles.catering_input} flex_center`}
				>
					<input
						type='text'
						required
						name="from_name"
						autoComplete='off'
						placeholder='Enter a Name*'
					/>
					<input
						type="text"
						required
						name='from_phone'
						autoComplete='off'
						placeholder='Enter a Phone Number*'
					/>
					<input
						type="text"
						name='from_email'
						autoComplete='off'
						placeholder='Enter an Email Address.'
					/>
					<textarea
						className={`${styles.catering_textarea} flex_center`}
						name='message'
						rows="9"
						placeholder='Tell us the catering needs for your event*'>
					</textarea>
					<br />
					<button
						type="submit"
						value="Send"
						required
						className='custom_button'>
						Send Email
					</button>
				</form>

			</div>
		</div>
	)
};

export default Catering;
