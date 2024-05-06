import React from "react";
import CryptoHome from "../components/CryptoHome";

const Home = () => {
	return (
		<div className="home">
			<h1>Bienvenido!</h1>
			<p>
				Este es un proyecto usando la API de CoinMarketCap, una plataforma de seguimiento de precios
				de criptomonedas
			</p>
			<div>
				<CryptoHome />
			</div>
		</div>
	);
};

export default Home;
