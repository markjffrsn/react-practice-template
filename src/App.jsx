import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
