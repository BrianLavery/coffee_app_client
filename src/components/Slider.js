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
				border: 1,
				borderColor: 'grey.300',
				borderRadius: 2,
				mb: 3,
			}}>
			<AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
				{data.map((definition, index) =>
					definition.image_uri ? (
						<div key={index}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									component='img'
									sx={{
										height: 255,
										display: 'block',
										maxWidth: 400,
										overflow: 'hidden',
										width: '100%',
									}}
									src={definition.image_uri}
								/>
							) : null}
						</div>
					) : (
						<div key={index}></div>
					)
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
				<Typography variant='h6' sx={{ marginTop: '16px', marginBottom: '8px' }}>
					{data[activeStep].definition}
				</Typography>
				<Typography variant='body1' sx={{ marginTop: '8px', marginBottom: '16px', fontStyle: 'italic' }}>
					({data[activeStep].category})
				</Typography>
			</Box>
			<MobileStepper
				variant='dots'
				steps={maxSteps}
				activeStep={activeStep}
				position='static'
				sx={{
					backgroundColor: 'rgba(0,0,0,0)',
					'.MuiMobileStepper-dot': { backgroundColor: '#CCCCCC' },
					'.MuiMobileStepper-dotActive': { backgroundColor: '#666666' },
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
		</Box>
	);
};

export default Slider;
