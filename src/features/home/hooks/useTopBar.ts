import { useEffect, useState } from 'react';

const useTopBar = () => {
	const [isScrolledDown, setIsScrolledDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 30) {
				setIsScrolledDown(true);
			} else {
				setIsScrolledDown(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const defaultActions = [
		{
			name: 'BTN 1',
		},
		{
			name: 'BTN 2',
		},
		{
			name: 'BTN 3',
		},
	];
	const [actions, setActions] = useState(defaultActions);

	useEffect(() => {
		if (isScrolledDown) {
			setActions((prevState) => [...prevState, { name: 'Rezerva Acum' }]);
		} else {
			setActions(defaultActions);
		}
	}, [isScrolledDown]);

	return {
		isScrolledDown,
		actions,
	};
};

export default useTopBar;
