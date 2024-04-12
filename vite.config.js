export default {
	server: {
		proxy: {
			"/api": {
				target: "https://pro-api.coinmarketcap.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
};
