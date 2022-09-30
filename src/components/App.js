import React from 'react';
import { CssBaseline, Button } from '@mui/material';

import BackgroundImage from './BackgroundImage';
import LogoImage from './LogoImage';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BackgroundImage>
				<div style={{ paddingTop: 100 }}>
					<LogoImage />
					<h1 style={{ color: 'white' }}>Thai coffee beans straight from the farmer</h1>
					<Button variant='contained'>Outlined</Button>
				</div>
			</BackgroundImage>
		</React.Fragment>
	);
};

export default App;
