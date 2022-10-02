import React from 'react';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Button, Typography } from '@mui/material';

import api from '../apis/api';

const MyForm = ({ initialValues = { name: '', email: '' } }) => {
	const onSubmit = async (values) => {
		const response = await api.get('/api/test');
		console.log(response.data);
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

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			validate={validate}
			render={({ handleSubmit, submitting }) => (
				<form onSubmit={handleSubmit} noValidate>
					<Typography variant='subtitle' style={{ fontWeight: 'bold' }}>
						Please enter your details to receive a free e-book.
					</Typography>

					<TextField label='Name' name='name' required={true} margin='normal' />
					<TextField label='Email' name='email' required={true} margin='normal' />
					<div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
						<Button type='submit' disabled={submitting}>
							Submit
						</Button>
					</div>
				</form>
			)}
		/>
	);
};

export default MyForm;
