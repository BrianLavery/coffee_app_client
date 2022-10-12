import * as React from 'react';
import { Box, Typography, Button, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({ data }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	if (!data || data.length === 0) {
		return null;
	}

	const maxSteps = data.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Box
			sx={{
				width: '600px',
				mb: 3,
			}}>
			<MobileStepper
				variant='dots'
				steps={maxSteps}
				activeStep={activeStep}
				position='static'
				sx={{
					backgroundColor: 'rgba(0,0,0,0)',
					'.MuiMobileStepper-dot': { backgroundColor: '#CCCCCC' },
					'.MuiMobileStepper-dotActive': { backgroundColor: '#666666' },
					mb: 1,
				}}
				nextButton={
					<Button size='small' color='darkgrey' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size='small' color='darkgrey' onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowLeft />
					</Button>
				}
			/>
			<AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} interval={5000} enableMouseEvents>
				{data.map((definition, index) =>
					definition.image_uri && Math.abs(activeStep - index) <= 2 ? (
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Box
								component='img'
								sx={{
									display: 'flex',
									maxHeight: 320,
									maxWidth: '95%',
									overflow: 'hidden',
									backgroundPosition: 'center',
									backgroundSize: 'cover',
								}}
								src={definition.image_uri}
							/>
						</div>
					) : null
				)}
			</AutoPlaySwipeableViews>
			<Box
				sx={{
					width: '100%',
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography variant='h6' sx={{ mt: 1, mb: 1 }}>
					{data[activeStep].title}
				</Typography>
				<Typography variant='body1' sx={{ mt: 1, mb: 1, fontStyle: 'italic' }}>
					{data[activeStep].growerDescription}
				</Typography>
				<Typography variant='body1' sx={{ mt: 1, mb: 1, fontStyle: 'italic' }}>
					{data[activeStep].coffeeDescription}
				</Typography>
			</Box>
		</Box>
	);
};

export default Slider;
