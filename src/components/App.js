import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/material/styles';

import BackgroundImage from './BackgroundImage';
import LogoImage from './LogoImage';
import theme from '../themes/theme';
import FormModal from './FormModal';
import Slider from './Slider';

import './App.css';

const CAROUSEL_DATA = [
	{
		title: 'Akha Ama Peaberry',
		growerDescription:
			'Akha Ama Coffee is a community of social entrepreneurs committed to growing, processing, roasting and brewing a sustainable coffee.',
		coffeeDescription: 'Black tea , Asian herbs and spices / Sweet and good body with mild fresh stone fruits.',
		image_uri: '/images/akhaama_peaberry.jpg',
	},
	{
		title: 'Lanna Natural',
		growerDescription:
			'Lanna Coffee is passionate about two things; helping the local hill tribes achieve a better life, and offering our customers a specialty product that will never disappoint.',
		coffeeDescription: 'Bright, floral, juicy and sweet mellow',
		image_uri: '/images/lanna_natural.jpg',
	},
	{
		title: 'Siam Hills',
		growerDescription:
			'Siam Hills Coffee are committed to supporting farmers that grow quality coffee and practice social responsibility as a way of life.',
		coffeeDescription:
			'100% Thai beans roasted to a medium roast and flavored with a distinctive blending of caramels and chocolaty, nutty flavors with a hint of faraway tropical vanilla.',
		image_uri: '/images/siam_hills.png',
	},
];

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackgroundImage>
				<div style={{ paddingTop: 60 }}>
					<Grid container spacing={2}>
						<Grid
							item
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

						<Grid
							item
							xs={12}
							md={10}
							mdOffset={1}
							lg={8}
							lgOffset={2}
							xl={6}
							xlOffset={3}
							display='flex'
							justifyContent='center'
							alignItems='center'
							marginTop={2}>
							<Typography variant='h4' style={{ color: 'white', fontWeight: 'bold' }}>
								Thai coffee beans straight from the farmer
							</Typography>
						</Grid>

						<Grid
							item
							xs={12}
							md={10}
							mdOffset={1}
							lg={8}
							lgOffset={2}
							xl={6}
							xlOffset={3}
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'>
							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								We source high quality single origin coffee beans from coffee farmers and deliver directly to your
								doorstep. Currently we are providing access to Thai coffee beans and we are expanding to other markets.
							</Typography>

							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								We work directly with farmers, so that the money you spend goes to supporting the individuals who who
								grow the beans that you enjoy and not 'middlemen'.
							</Typography>

							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								We are launching at the end of 2022, click below to pre-order now and secure a limited spot for the
								first shipment.
							</Typography>
						</Grid>

						<Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
							<FormModal />
						</Grid>

						<Grid item xs={12} display='flex' justifyContent='center' alignItems='center' marginTop={4}>
							<Typography variant='h5' style={{ color: 'white', fontWeight: 'bold' }}>
								Thai coffees included in pre-order offer
							</Typography>
						</Grid>

						<Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
							<Slider data={CAROUSEL_DATA} />
						</Grid>
					</Grid>
				</div>
			</BackgroundImage>
		</ThemeProvider>
	);
};

export default App;
