import React from 'react';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Button } from '@mui/material';

const MyForm = ({ initialValues = { name: '', email: '' } }) => {
	const onSubmit = async (values) => {
		console.log(values);
	};

	const validate = async (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'You must enter a name.';
		}
		if (!values.email) {
			errors.email = 'You must enter an email.';
		}
		return errors;
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			validate={validate}
			render={({ handleSubmit, values, submitting }) => (
				<form onSubmit={handleSubmit} noValidate>
					<TextField label='Name' name='name' required={true} />
					<TextField label='Email' name='email' required={true} />
					<Button type='submit' disabled={submitting}>
						Submit
					</Button>
				</form>
			)}
		/>
	);
};

export default MyForm;
