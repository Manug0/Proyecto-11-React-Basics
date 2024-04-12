import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Crypto from "./pages/Crypto";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/crypto" element={<Crypto />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
