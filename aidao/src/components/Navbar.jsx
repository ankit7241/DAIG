import profile_image from "../assets/profile_image.png";
import navLogo from "../assets/NavLogo.png";
export default function Navbar() {
	return (
		<div className="flex pt-1 pr-8 pb-1 pl-4 gap-44 items-center justify-between bg-[#161616]">
			<div className="flex items-center">
				<div className="text-white DM text-[4.071vw] lg:text-4xl font-medium tracking-widest hover:scale-110">
					DAIG
				</div>
				<img
					src={profile_image}
					className="w-[16.285vw] h-[16.285vw] shrink-0 lg:w-40 lg:h-40 hover:scale-110"
				/>
			</div>
			<img src={navLogo} className="h-4 w-12 shrink-0 xl:hidden" />
			<div className="hidden xl:inline-flex xl:items-start xl:gap-6">
				<button className="Inter text-white text-2xl leading-6 font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
					Features
				</button>
				<button className="Inter text-white text-2xl leading-6 font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
					Whitepaper
				</button>
				<button className="Inter text-white text-2xl leading-6 font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
					Staking
				</button>
				<button className="Inter text-white text-2xl leading-6 font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
					TG-GPT App
				</button>
			</div>
			<button className="hidden xl:inline-flex py-3 px-2 justify-center items-center gap-2 rounded-sm border-2 border-[#C2A502]  bg-connectWalletGradient hover:bg-[#FFDF00] active:bg-[#D4AF37] Inter text-white text-2xl leading-6 font-bold hover:bg-connectHoverGradient active:bg-goldActiveGradient hover:scale-110">
				Connect Wallet
			</button>
		</div>
	);
}
// import React, { useState } from "react";
// import profile_image from "../assets/profile_image.png";
// import navLogo from "../assets/NavLogo.png";

// export default function Navbar() {
// 	// const [showOptions, setShowOptions] = useState(false);

// 	// const toggleOptions = () => {
// 	// 	setShowOptions(!showOptions);
// 	// };

// 	return (
// 		<div className="flex pt-1 pr-8 pb-1 pl-4 gap-44 items-center justify-between bg-[#161616]">
// 			<div className="flex items-center">
// 				<div className="text-white DM text-[4.071vw] lg:text-4xl font-medium tracking-widest">
// 					DAIG
// 				</div>
// 				<button className="w-[16.285vw] h-[16.285vw] shrink-0 lg:w-40 lg:h-40 ml-4 lg:ml-2">
// 					<img src={profile_image} alt="profile" />
// 				</button>
// 			</div>
// 			<div className="xl:hidden cursor-pointer">
// 				<img
// 					// onClick={toggleOptions}
// 					src={navLogo}
// 					className="h-4 w-12"
// 				/>
// 			</div>
// 			{/* {showOptions && (
// 				<div className="flex flex-col xl:hidden bg-[#161616] mt-2">
// 					<div className="Inter text-white text-2xl leading-6 font-bold my-2">
// 						Features
// 					</div>
// 					<div className="Inter text-white text-2xl leading-6 font-bold my-2">
// 						Whitepaper
// 					</div>
// 					<div className="Inter text-white text-2xl leading-6 font-bold my-2">
// 						Staking
// 					</div>
// 					<div className="Inter text-white text-2xl leading-6 font-bold my-2">
// 						TG-GPT App
// 					</div>
// 				</div>
// 			)} */}
// 			<div className="hidden xl:inline-flex lg:items-start lg:gap-6">
// 				<div className="Inter text-white text-2xl leading-6 font-bold">
// 					Features
// 				</div>
// 				<div className="Inter text-white text-2xl leading-6 font-bold">
// 					Whitepaper
// 				</div>
// 				<div className="Inter text-white text-2xl leading-6 font-bold">
// 					Staking
// 				</div>
// 				<div className="Inter text-white text-2xl leading-6 font-bold">
// 					TG-GPT App
// 				</div>
// 				<div className="Inter text-white text-2xl leading-6 font-bold"></div>
// 			</div>
// 			<div className="hidden xl:inline-flex py-3 px-2 justify-center items-center gap-2 rounded-sm border-2 border-[#C2A502] bg-connectWalletGradient">
// 				<button className="Inter text-white text-2xl leading-6 font-bold">
// 					Connect Wallet
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
