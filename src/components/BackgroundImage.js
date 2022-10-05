import React from 'react';
import { Container } from '@mui/material';

import './BackgroundImage.css';

const BackgroundImage = ({ children }) => {
	return (
		<div
			className='background-image'
			style={{
				backgroundImage: `url(/images/coffee.jpg)`,
			}}>
			<div className='background-image__overlay'>
				<Container maxWidth='xl' className='background-image__container'>
					{children}
				</Container>
			</div>
		</div>
	);
};

export default BackgroundImage;
