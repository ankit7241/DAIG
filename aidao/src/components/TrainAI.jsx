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
					<div className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px]">
						<button className="Inter text-white text-[3vw] text-center font-bold lg:text-2xl">
							Try DAIG
						</button>
					</div>
					<div className="flex p-2 justify-center items-center gap-1 rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px]">
						<button className="Inter text-white text-[3vw] text-center font-bold lg:text-2xl">
							Whitepaper
						</button>
					</div>
				</div>
			</div>
			<div className="flex relative items-center justify-center">
				<img src={robot1} className="lg:w-[501px] lg:h-600 z-10" />
				<img src={ellipse} className="absolute" />
			</div>
			<div className="flex items-center justify-center">
				<div className="hidden lg:inline-flex lg:items-start lg:gap-24">
					<div className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient lg:p-6 lg:rounded-[2px]">
						<button className="Inter text-white text-[3vw] text-center font-bold lg:text-2xl">
							Try TG-GPT Bot
						</button>
					</div>
					<div className="flex p-2 justify-center items-center gap-1 rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] lg:p-6 lg:rounded-[2px]">
						<button className="Inter text-white text-[3vw] text-center font-bold lg:text-2xl">
							Whitepaper
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
