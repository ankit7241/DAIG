import profile_image from "../assets/profile_image.png";
import youtubeIcon from "../assets/youtubeIcon.svg";
import discordIcon from "../assets/discordIcon.svg";
import telegramIcon from "../assets/telegramIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
export default function Footer() {
	return (
		<div className="flex flex-col pt-28 pb-44">
			<div className="flex flex-col xl:flex-row">
				<div className="flex flex-col items-center gap-16 xl:pl-24 xl:items-start">
					<div className="flex items-center xl:justify-start">
						<div className="text-white DM text-[8.359vw] md:text-4xl font-medium tracking-widest hover:scale-110">
							DAIG
						</div>
						<img
							src={profile_image}
							className="w-[34.351vw] h-[34.351vw] shrink-0 md:w-40 md:h-40 hover:scale-110"
						/>
					</div>
					<div className="flex flex-col gap-6">
						<div className="text-white Roboto text-[6.107vw] font-black md:text-3xl">
							Sign up to Our Newsletter
						</div>
						<div className="flex flex-col gap-6 xl:flex-row">
							<input
								className="flex text-white Roboto items-center pl-4 shrink-0 w-[291px] h-16 border botder-[0.758px] border-[#565555] bg-[#212121] sm:w-[400px] md:w-[480px] hover:scale-105"
								placeholder="Jksybah23@gmail.com"
								type="text"
							></input>
							<div className="flex justify-end">
								<button className="bg-[#FAFAFA] border-[#FAFAFA] rounded-lg border-[1px] py-2 px-3 text-center Roboto text-2xl font-medium text-[#3A3A3A] xl:text-2xl hover:bg-[#E8E8E8] active:bg-[#D8D8D8] hover:scale-110">
									Sign Up
								</button>
							</div>
						</div>
					</div>
					<div className="text-[#808080] text-center font-normal text-base xl:text-lg Roboto w-[225px] xl:w-full xl:text-start">
						For contact and queries, please contact@TGbot.io
					</div>
				</div>
				<div className="flex flex-col items-center pt-28 gap-16 xl:flex-row xl:items-start xl:pl-36">
					<div className="flex flex-col items-center gap-6 xl:items-start">
						<div className="text-white text-center text-2xl Roboto font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							TG-GPT Bots
						</div>
						<div className="flex flex-col gap-4 xl:items-start">
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Whitepaper
							</div>
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Media Kit
							</div>
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Privacy policy
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center gap-6 xl:items-start">
						<div className="text-white text-center text-2xl Roboto font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							INVESTORS
						</div>
						<div className="flex flex-col gap-4 xl:items-start">
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Pitch Deck
							</div>
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Contact Us
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center gap-6 xl:items-start     ">
						<div className="text-white text-center text-2xl Roboto font-bold hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							PRICING
						</div>
						<div className="flex flex-col gap-4 xl:items-start">
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								Stake $GPTG
							</div>
							<div className="text-[#808080] text-center text-2xl Roboto font-medium hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-105">
								TG Bot AI Experience
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center pt-24 gap-28">
				<div className="text-white Roboto text-[4.071vw] text-center font-normal w-3/4 md:text-2xl">
					TG-GPT Bots is a next-generation blockchain AI tool empowering Web 3.0
					communities fuelling their creativity and productivity like never
					before !🤖👨‍💻
				</div>
				<div className="flex justify-center gap-3 xl:gap-20">
					<img src={youtubeIcon} alt="" className="hover:scale-125" />
					<img src={discordIcon} alt="" className="hover:scale-125" />
					<img src={instagramIcon} alt="" className="hover:scale-125" />
					<img src={telegramIcon} alt="" className="hover:scale-125" />
				</div>
				<div className="text-[#808080] Roboto text-[3.817vw] font-medium w-3/5 md:text-2xl md:text-center">
					Copyrights © 2023. TG-GPT Bots OÜ.All rights reserved.
				</div>
			</div>
		</div>
	);
}
