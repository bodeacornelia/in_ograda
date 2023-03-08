import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import VideoBanner from './VideoBanner';
import { VIDEO_BANNER_DESC, BOOK_BTN } from '../constants';

const styles = {
	overlayContainer: {
		backgroundColor: 'black',
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: '0.2',
	},
	bannerContent: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	bannerDescription: { flexGrow: 1, color: 'white', textAlign: 'center' },
};

const PresentationalBanner = () => (
	<Box position="relative">
		<Box sx={styles.overlayContainer}></Box>
		<VideoBanner />
		<Stack spacing={2} alignItems="center" sx={styles.bannerContent}>
			<Typography
				variant="h3"
				component="div"
				sx={styles.bannerDescription}
			>
				{VIDEO_BANNER_DESC}
			</Typography>
			<Button variant="contained">{BOOK_BTN}</Button>
		</Stack>
	</Box>
);

export default PresentationalBanner;
