import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const styles = {
	container: {
		padding: '24px',
		background: 'rgb(24,19,11)',
		minHeight: '100px',
		width: '100%',
	},
};

interface MenuProps {
	title: string;
	links: { text: string; href: string }[];
}

const menus = [
	{
		title: 'Menu',
		links: [
			{
				text: 'Activities',
				href: '#',
			},
			{
				text: 'About Us',
				href: '#',
			},
			{
				text: 'Contact Us',
				href: '#',
			},
			{
				text: 'Report',
				href: '#',
			},
		],
	},
	{
		title: 'Social Media',
		links: [
			{
				text: 'Instagram',
				href: '#',
			},
			{
				text: 'Facebook',
				href: '#',
			},
			{
				text: 'TikTok',
				href: '#',
			},
			{
				text: 'Whatsapp',
				href: '#',
			},
		],
	},
];

const Menu = ({ title, links }: MenuProps) => (
	<Stack direction="column" spacing={2}>
		<Typography variant="h4" component="div" color="white">
			{title}
		</Typography>
		{links.map((link) => (
			<Link
				key={link.text}
				variant="h6"
				href={link.href}
				underline="hover"
				color="white"
			>
				{link.text}
			</Link>
		))}
	</Stack>
);

const Footer = () => (
	<Stack
		direction="row"
		justifyContent="center"
		spacing={8}
		sx={styles.container}
	>
		{menus.map((item) => (
			<Menu key={item.title} {...item} />
		))}
	</Stack>
);

export default Footer;
