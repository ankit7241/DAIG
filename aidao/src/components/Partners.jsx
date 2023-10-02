import partnersLogo from "../assets/partnersLogo.svg";
export default function Partners() {
	return (
		<div className="flex flex-col justify-center gap-9 mt-24 py-6 bg-[#1A151D] w-full lg:h-72">
			<div className="Inter text-white text-[3.562vw] xl:text-2xl text-center font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-150">
				PARTNERS
			</div>
			<div className="Inter text-white text-[6.107vw] xl:text-6xl text-center font-bold bg-partnerTextGradient text-transparent bg-clip-text hover:scale-105">
				YOU CAN BE ONE!
			</div>
			<img
				src={partnersLogo}
				className="absolute right-0 w-[52.316vw] xl:w-[592px] xl:h-[208px]"
			/>
		</div>
	);
}
