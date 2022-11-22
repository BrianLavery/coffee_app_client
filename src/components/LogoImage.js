import React from 'react';

import './LogoImage.css';

const LogoImage = () => {
	return (
		<div className='logo-image'>
			<img className='logo-image__image' src='/logos/logo.png' alt='Logo' />
			<div className='logo-image__overlay'></div>
		</div>
	);
};

export default LogoImage;
