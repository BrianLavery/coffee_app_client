import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { TextField, Select } from 'mui-rff';
import { Button, Typography, MenuItem } from '@mui/material';

import serverApi from '../apis/serverApi';
import ipApi from '../apis/ipApi';

const COFFEE_TYPES = [
	{ value: 'akha_ama', label: 'Akha Ama - Peaberry' },
	{ value: 'boncafe', label: 'Boncafe - All Day Roasted Coffee' },
	{ value: 'hilltribe', label: 'Hill Tribe Coffee - Full City Roast' },
];

const UserForm = ({ initialValues = { name: '', email: '' }, handleClose }) => {
	const [submitted, setSubmitted] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');

	const onSubmit = async (values) => {
		console.log('values', values);

		const { name, email, coffee, feedback } = values;
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
			const response = await serverApi.post('/api/user', {
				name,
				email,
				coffee,
				feedback,
				ipAddress,
				ipCity,
				ipCountry,
			});
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

						<TextField name='name' label='Name' required={true} margin='normal' />
						<TextField name='email' label='Email' required={true} margin='normal' />
						<Select name={`coffee`} label='Select preferred coffee (optional)' formControlProps={{ margin: 'normal' }}>
							{COFFEE_TYPES.map((coffee, index) => {
								return (
									<MenuItem key={index} value={coffee.value}>
										{coffee.label}
									</MenuItem>
								);
							})}
						</Select>
						<TextField
							name='feedback'
							label='Comments (optional, 100 character limit)'
							required={true}
							margin='normal'
							inputProps={{
								maxLength: 100,
							}}
						/>
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
