import React, { useEffect, useState } from "react";
import CryptoLogo from "./CryptoLogo";
import axios from "axios";

const CryptoHome = () => {
	const [cryptoRank, setCryptoRank] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("/api/v1/cryptocurrency/listings/latest", {
					headers: {
						"X-CMC_PRO_API_KEY": import.meta.env.VITE_APP_API_KEY,
						Accept: "application/json",
						"Accept-Encoding": "deflate, gzip",
					},
				});
				setCryptoRank(res.data.data.slice(0, 3));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="cryptosHome">
			{cryptoRank.map((crypto) => (
				<CryptoLogo id={crypto.id} />
			))}
		</div>
	);
};

export default CryptoHome;
