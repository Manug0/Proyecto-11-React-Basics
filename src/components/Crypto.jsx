import React from "react";
import CryptoLogo from "./CryptoLogo";

const Crypto = ({ crypto }) => {
	return (
		<div className="coin">
			<CryptoLogo id={crypto.id} />
			<h3>{crypto.name}</h3>
			<h4>
				$
				{crypto.quote.USD.price > 1
					? crypto.quote.USD.price.toFixed(2)
					: crypto.quote.USD.price.toFixed(4)}
			</h4>
			<h4 style={{ color: crypto.quote.USD.percent_change_24h > 0 ? " rgb(0, 190, 0)" : "red" }}>
				{" "}
				{crypto.quote.USD.percent_change_24h.toFixed(2)}%
			</h4>
		</div>
	);
};

export default Crypto;
