import React from 'react';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import PresentationalBanner from './components/PresentationalBanner';
import Activities from './components/Activities';
import Banner from './components/Banner';
import Footer from './components/Footer';

const Home = () => (
	<Box sx={{ position: 'relative' }}>
		<TopBar />
		<PresentationalBanner />
		<Box height={50}></Box>
		<Activities />
		<Box height={100}></Box>
		<Banner />
		<Footer />
	</Box>
);
export default Home;
