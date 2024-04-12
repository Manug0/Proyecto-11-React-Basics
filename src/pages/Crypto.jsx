import React from "react";
import { Api } from "../components/Api";

const Crypto = () => {
	return (
		<div className="crypto">
			<h2>Top 10 criptomonedas por capitalización</h2>
			<Api />
		</div>
	);
};

export default Crypto;
