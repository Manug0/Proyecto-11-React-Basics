import axios from "axios";
import React, { useEffect, useState } from "react";
import Crypto from "./Crypto";

const Api = () => {
	const [crypto, setCrypto] = useState([]);

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
				setCrypto(res.data.data.slice(0, 10));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{crypto.map((crypto) => (
				<Crypto key={crypto.id} crypto={crypto} />
			))}
		</div>
	);
};

export default Api;
