import React from "react";

const About = () => {
	return (
		<div className="about">
			<p>Proyecto de prueba con la API de CoinMarketCap</p>
			<p>La API es llamada al recargar la página para evitar alcanzar el límite de peticiones</p>
			<p>
				En Home los logos que aparecerán son los de las 3 primeras criptos por capitalización,
				mientras que en Crypto, aparecerán la 10 primeras con sus precios y su variación % de las
				últimas 24h
			</p>
			<p>Made by Manu 🖌️</p>
		</div>
	);
};

export default About;
