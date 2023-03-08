import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../features/home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

const App = () => <RouterProvider router={router} />;

export default App;
