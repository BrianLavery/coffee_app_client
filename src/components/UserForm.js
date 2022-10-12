import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Button, Typography } from '@mui/material';

import serverApi from '../apis/serverApi';
import ipApi from '../apis/ipApi';

const UserForm = ({ initialValues = { name: '', email: '' }, handleClose }) => {
	const [submitted, setSubmitted] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');

	const onSubmit = async (values) => {
		const { name, email } = values;
		let [ipAddress, ipCity, ipCountry] = ['unknown', 'unknown', 'unknown'];

		try {
			const response = await ipApi.get();
			const { data } = response;

			if (data) {
				ipAddress = data.IPv4;
				ipCity = data.city;
				ipCountry = data.country_name;
			}
		} catch (error) {
			console.log(error);
		}

		try {
			const response = await serverApi.post('/api/user', { name, email, ipAddress, ipCity, ipCountry });
			setSubmitMessage(response.data.result);
			setSubmitted(true);
		} catch (error) {
			setSubmitMessage('There was an error with your submission');
		}
	};

	const validate = async (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = ['You must enter a name.'];
		}

		if (!values.email) {
			errors.email = ['You must enter an email.'];
		} else if (!values.email.includes('@')) {
			errors.email = ['You must enter a valid email.'];
		}

		return errors;
	};

	const renderForm = () => {
		return submitted ? (
			<div>
				<Typography variant='subtitle' style={{ fontWeight: 'bold' }}>
					{submitMessage}
				</Typography>
			</div>
		) : (
			<Form
				onSubmit={onSubmit}
				initialValues={initialValues}
				validate={validate}
				render={({ handleSubmit, submitting }) => (
					<form onSubmit={handleSubmit} noValidate>
						<Typography variant='subtitle' style={{ fontWeight: 'bold' }}>
							Please enter your details to sign up to our limited first pre-order.
						</Typography>

						<TextField label='Name' name='name' required={true} margin='normal' />
						<TextField label='Email' name='email' required={true} margin='normal' />
						<div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
							<Button type='submit' size='large' variant='contained' disabled={submitting}>
								Pre-Order Now
							</Button>
						</div>
					</form>
				)}
			/>
		);
	};

	return renderForm();
};

export default UserForm;
