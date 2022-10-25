import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { SubHeading } from '../../components';
import { content } from '../../constants';
import styles from './styles.module.scss';


const Catering = () => {

	const form = useRef();
	const [validPhone, setValidPhone] = useState(true);
	const [validEmail, setValidEmail] = useState(true);

	const validateEmail = () => {
		(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.current.from_email.value) || form.current.from_email.value.trim().length === 0)
			? setValidEmail(true)
			: setValidEmail(false);
	}

	const validatePhone = () => {
		(form.current.from_phone.value.trim().length > 9)
			? setValidPhone(true)
			: setValidPhone(false);
	}

	const validateFormSubmit = (e) => {
		let alertMessage = content.generalErrorMessage;
		e.preventDefault();
		validateEmail();
		validatePhone();

		if (validPhone && validEmail) {
			sendEmail(e);
		}
		else {
			if (!validPhone && !validEmail) {
				alertMessage = content.contactErrorMessage;
			}
			if (!validPhone) {
				alertMessage = content.phoneErrorMessage;
			}
			if (!validEmail) {
				alertMessage = content.emailErrorMessage;
			}
			alert(alertMessage)
		}
	}

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
	}

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
					onSubmit={validateFormSubmit}
					className={`${styles.catering_input} flex_center`}
				>
					<input
						type='text'
						name="from_name"
						required
						autoComplete='off'
						placeholder='Enter a Name*'
					/>
					<input
						type="text"
						name='from_phone'
						required
						onChange={validatePhone}
						autoComplete='off'
						placeholder='Enter a Phone Number*'
					/>
					<input
						type="text"
						name='from_email'
						onChange={validateEmail}
						autoComplete='off'
						placeholder='Enter an Email Address.'
					/>
					<textarea
						className={`${styles.catering_textarea} flex_center`}
						name='message'
						required
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
}

export default Catering;
