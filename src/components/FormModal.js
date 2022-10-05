import React from 'react';
import { Button, Box, Modal } from '@mui/material';

import UserForm from './UserForm';
import ipApi from '../apis/ipApi';
import serverApi from '../apis/serverApi';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	maxWidth: '500px',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const FormModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const onButtonClick = async () => {
		handleOpen();
		const response = await ipApi.get();
		const { data } = response;

		let [ipAddress, ipCity, ipCountry] = ['unknown', 'unknown', 'unknown'];

		if (data) {
			ipAddress = data.IPv4;
			ipCity = data.city;
			ipCountry = data.country_name;
		}

		await serverApi.post('/api/click', { ipAddress, ipCity, ipCountry });
	};

	return (
		<div>
			<Button size='large' variant='contained' onClick={onButtonClick}>
				Pre-Order Now
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<UserForm handleClose={handleClose} />
				</Box>
			</Modal>
		</div>
	);
};

export default FormModal;
