import React from 'react';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { BANNER_DESC } from '../constants';
import libotin from '../libotin.jpeg';

const styles = {
	imageContainer: { width: '100%', height: '600px' },
	cardMedia: { height: '100%' },
	contentContainer: {
		position: 'absolute',
		background: 'rgba(22,22,22,.7)',
		top: '50%',
		zIndex: '1000',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '4px',
		whiteSpace: 'pre-line',
		maxWidth: '450px',
	},
	contentTypography: { padding: '24px', color: 'white' },
};

const mockItems = [
	{
		name: 'Electronics',
		image: libotin,
	},
];

const Banner = () => (
	<Box position="relative">
		<Stack
			sx={styles.contentContainer}
			direction="row"
			justifyContent="center"
		>
			<Typography
				variant="subtitle1"
				component="div"
				sx={styles.contentTypography}
			>
				{BANNER_DESC}
			</Typography>
		</Stack>
		<Carousel autoPlay={false} indicators={false}>
			{mockItems.map((item) => (
				<Card sx={styles.imageContainer} key={item.name}>
					<CardMedia
						sx={styles.cardMedia}
						image={item.image}
						title={item.name}
					/>
				</Card>
			))}
		</Carousel>
	</Box>
);

export default Banner;
