import robot1 from "../assets/robot1.png";
import ellipse from "../assets/ellipse1.png";
export default function TrainAI() {
	return (
		<div className="flex flex-col gap-20 mt-14 lg:my-28">
			<div className="flex flex-col items-center justify-center gap-5 ">
				<div className="Inter text-[3.562vw] text-center font-bold bg-trainAIGradient text-transparent bg-clip-text lg:text-2xl">
					EARN PASSIVE INCOME
				</div>
				<div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[42px]">
					Train GURU AI to Earn
				</div>
				<div className="Inter text-white text-[4.071vw] text-center font-normal px-2 lg:text-2xl lg:w-2/5">
					Join hands with TG-GPT Bot to train it's AI model on various topics of
					Web 3.0 and start earning passive income in $GPTG.
				</div>
				<div className="inline-flex items-start gap-4 xl:gap-24 lg:hidden">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px]">
						Try DAIG
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] ">
						Whitepaper
					</button>
				</div>
			</div>
			<div className="flex relative items-center justify-center">
				<img src={robot1} className="lg:w-[501px] lg:h-600 z-10" />
				<img src={ellipse} className="absolute" />
			</div>
			<div className="flex items-center justify-center">
				<div className="hidden lg:inline-flex lg:items-start lg:gap-24">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105">
						Try TG-GPT Bot
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105 ">
						Whitepaper
					</button>
				</div>
			</div>
		</div>
	);
}
