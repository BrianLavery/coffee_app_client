import React from 'react';
import { CssBaseline, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import BackgroundImage from './BackgroundImage';
import LogoImage from './LogoImage';

const App = () => {
	let theme = createTheme();
	theme = responsiveFontSizes(theme);

	theme.typography.h2 = {
		fontSize: '2rem',
		'@media (min-width:600px)': {
			fontSize: '3rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '4rem',
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackgroundImage>
				<div style={{ paddingTop: 100 }}>
					<Grid container spacing={2} sx={{ flexGrow: 1 }}>
						<Grid
							xs={10}
							sm={6}
							md={4}
							lg={2}
							xsOffset={1}
							smOffset={3}
							mdOffset={4}
							lgOffset={5}
							display='flex'
							justifyContent='center'
							alignItems='center'>
							<LogoImage />
						</Grid>
						<Grid xs={1} sm={3} md={4} lg={5} />

						<Grid xs={12} xl={6} xlOffset={3} display='flex' justifyContent='center' alignItems='center'>
							<h2 style={{ color: 'white' }}>Thai coffee beans straight from the farmer</h2>
						</Grid>
						<Grid xs={0} xl={3} />

						<Grid xs={12} display='flex' justifyContent='center' alignItems='center'>
							<Button variant='contained'>Pre-Order Now</Button>
						</Grid>

						<Grid xs={12} xl={6} xlOffset={3} display='flex' justifyContent='center' alignItems='center'>
							<p style={{ color: 'white' }}>
								Row House is committed to helping you start a rowing-based fitness routine that will improve your health
								and deliver unparalleled results. Move better, feel better and live better through Row House. BOOK YOUR
								FIRST CLASS and join our community to PULL TOGETHER.
							</p>
						</Grid>

						<Typography variant='h2' style={{ color: 'white' }}>
							Responsive h2
						</Typography>
					</Grid>
				</div>
			</BackgroundImage>
		</ThemeProvider>
	);
};

export default App;
