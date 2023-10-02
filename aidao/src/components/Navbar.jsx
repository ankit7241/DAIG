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
