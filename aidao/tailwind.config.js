/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#FFF",
				overviewBg: "rgba(255, 255, 255, 0.05)",
			},

			backgroundImage: {
				connectWalletGradient:
					"linear-gradient(116deg, #BD8928 33.39%, #795B20 66.86%)",
				daigGradient: "linear-gradient(116deg, #D69F31 33.39%, #936C1F 69.3%)",
				partnerTextGradient:
					"linear-gradient(259deg, #FFF 41.88%, rgba(255, 255, 255, 0.21) 61.39%)",
				introTextGradient:
					"linear-gradient(98deg, #936C1F 44.14%, rgba(144, 105, 27, 0.60) 62.54%)",
				trainAIGradient:
					"linear-gradient(93deg, #D69F31 32.86%, #926C1F 82.44%)",
				contributorsGradient:
					"linear-gradient(93deg, #FDD433 32.86%, #AD900C 82.44%)",
				phoneHeadingGradient:
					"linear-gradient(93deg, #F6C141 32.86%, #C7B895 82.44%)",
			},
			boxShadow: {
				xl: " 0px 5px 0px 0px #191A23",
				sm: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				xs: "0px 4px 19px 0px rgba(119, 147, 65, 0.30)",
			},
		},
	},
	plugins: [],
};
