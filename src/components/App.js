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
		title: 'Akha Ama - Peaberry',
		growerDescription:
			'Akha Ama Coffee is a community of social entrepreneurs committed to growing, processing, roasting and brewing a sustainable coffee.',
		coffeeDescription: 'Black tea , Asian herbs and spices / Sweet and good body with mild fresh stone fruits.',
		image_uri: '/images/akhaama_peaberry.jpg',
	},
	{
		title: 'Boncafe - All Day Roasted Coffee',
		growerDescription:
			'Boncafe source and roast beans from both the Northern and the Southern regions of Thailand to support local farmers.',
		coffeeDescription: 'Lightly roasted coffee with delicate and soft tastes - drink at all times of the day',
		image_uri: '/images/boncafe.jpg',
	},
	{
		title: 'Hill Tribe Coffee - Full City Roast',
		growerDescription: 'We grow and process beans from our farms in the Northern region of Thailand.',
		coffeeDescription:
			'100% Thai beans that smell like caramel mixed with cocoa. Flavoured with a distinctive blending of caramels and chocolaty, nutty flavors with a hint of faraway tropical vanilla.',
		image_uri: '/images/hilltribe.jpg',
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
								doorstep.
							</Typography>
							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								We work alongside farmers, giving you a unique coffee experience with more knowledge about what you
								consumer - who grew it and how it got to you. Our approach ensures that the money you spend goes to
								supporting the individuals who grow the beans that you enjoy.
							</Typography>
							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								We are currently we are providing access to Thai coffee beans and we are expanding to other markets.
							</Typography>
							<Typography variant='body1' sx={{ color: 'white', my: 1 }}>
								Thailand began growing Arabica beans in the Golden Triangle region as a cash crop to support farmers who
								previously harvested the Opium plant. It is now established itself as a specialty coffee region known
								for medium body & acidity with both sweet and nutty tastes.
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
