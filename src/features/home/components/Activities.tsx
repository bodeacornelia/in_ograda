import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import activitate1 from '../Activitate1.jpeg';
import activitate2 from '../Activitate2.jpeg';
import activitate3 from '../Activitate3.jpeg';
import { ACTIVITIES_TITLE, BOOK_BTN, DETAILS_BTN } from '../constants';

const styles = {
	container: {
		width: '100vw',
		marginTop: '50px',
	},
	card: {
		maxWidth: '376px',
	},
};

const cards = [
	{
		name: 'Decorating eggs',
		desc:
			'Reviving the Age-Old Easter Traditions of Libotin, Maramures: Uncovering ' +
			'the Beauty of Egg Decoration Through the Generation',
		image: activitate1,
	},
	{
		name: 'Card2',
		desc: 'Card2 Desc nisadfnj adsfjn asdfnsdafn osadf sadnif oasd fnaosf nasiof oasf a',
		image: activitate2,
	},
	{
		name: 'Card3',
		desc: 'Card3 Desc nisadfnj adsfjn asdfnsdafn osadf sadnif oasd fnaosf nasiof oasf a',
		image: activitate3,
	},
];

interface ActivityCardProps {
	name: string;
	desc: string;
	image: string;
}

const ActivityCard = ({ name, desc, image }: ActivityCardProps) => (
	<Card sx={styles.card}>
		<CardMedia component="img" height="256" image={image} alt={name} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{name}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{desc}
			</Typography>
		</CardContent>
		<CardActions>
			<Button>{DETAILS_BTN}</Button>
			<Button>{BOOK_BTN}</Button>
		</CardActions>
	</Card>
);

const Activities = () => (
	<>
		<Stack justifyContent="center" alignItems="center">
			<Typography gutterBottom variant="h2" component="div">
				{ACTIVITIES_TITLE}
			</Typography>
		</Stack>
		<Stack
			sx={styles.container}
			direction="row"
			justifyContent="center"
			spacing={2}
		>
			{cards.map((item) => (
				<ActivityCard
					key={item.name}
					name={item.name}
					desc={item.desc}
					image={item.image}
				/>
			))}
		</Stack>
	</>
);

export default Activities;
