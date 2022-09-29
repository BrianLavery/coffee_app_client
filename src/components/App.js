import React from 'react';
import { CssBaseline } from '@mui/material';

import BackgroundImage from './BackgroundImage';
import LogoImage from './LogoImage';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BackgroundImage>
				<div style={{ paddingTop: 100 }}>
					<LogoImage />
					<img src='/images/logo_cropped.png' alt='Logo' style={{ maxWidth: '10%' }} />
					<h1 style={{ color: 'white' }}>Thai coffee beans straight from the farmer</h1>
				</div>
			</BackgroundImage>
		</React.Fragment>
	);
};

export default App;
