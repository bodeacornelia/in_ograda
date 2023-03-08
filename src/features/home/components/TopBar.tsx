import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import useTopBar from '../hooks/useTopBar';

const styles = {
	appBar: {
		background: 'transparent',
		boxShadow: 'none',
	},
	appBarAtScroll: {
		position: 'fixed',
		background: 'white',
	},
	appBarButton: {
		color: 'white',
	},
	appBarButtonAtScroll: {
		color: 'primary',
	},
};

const TopBar = () => {
	const { isScrolledDown, actions } = useTopBar();

	return (
		<AppBar
			position="absolute"
			sx={isScrolledDown ? styles.appBarAtScroll : styles.appBar}
		>
			<Toolbar>
				<Typography
					variant="h4"
					component="div"
					sx={{
						flexGrow: 1,
						color: isScrolledDown ? 'black' : 'white',
					}}
				>
					In Ograda
				</Typography>
				<Box>
					{actions.map(({ name }) => (
						<Button
							key={name}
							sx={
								isScrolledDown
									? styles.appBarButtonAtScroll
									: styles.appBarButton
							}
						>
							{name}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
