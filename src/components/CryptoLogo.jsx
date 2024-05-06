import axios from "axios";
import React, { useEffect, useState } from "react";

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

export default CryptoLogo;
