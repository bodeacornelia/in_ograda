import React from 'react';
import bannerVideo from '../Iceland_road_2.mp4';

const VideoBanner = () => (
	<video style={{ height: 'auto', width: '100vw' }} autoPlay loop muted>
		<source src={bannerVideo} type="video/mp4" />
	</video>
);

export default VideoBanner;
