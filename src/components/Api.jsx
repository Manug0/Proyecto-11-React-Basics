import axios from "axios";
import React, { useEffect, useState } from "react";

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

const CryptoLogo = ({ id }) => {
	const [logo, setLogo] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/v2/cryptocurrency/info?id=${id}`, {
					headers: {
						"X-CMC_PRO_API_KEY": import.meta.env.VITE_APP_API_KEY,
						Accept: "application/json",
						"Accept-Encoding": "deflate, gzip",
					},
				});
				setLogo(res.data.data[id].logo);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [id]);

	return <img src={logo} />;
};

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

export { Api, CryptoLogo, CryptoHome };
