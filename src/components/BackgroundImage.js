import React from 'react';
import { Container } from '@mui/material';

import './BackgroundImage.css';

const BackgroundImage = ({ children }) => {
	return (
		<div className='background-image'>
			<div className='background-image__overlay'>
				<Container maxWidth={false} className='background-image__container'>
					{children}
				</Container>
			</div>
		</div>
	);
};

export default BackgroundImage;
