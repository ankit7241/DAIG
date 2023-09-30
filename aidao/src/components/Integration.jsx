import robot1 from "../assets/robot1.png";
import ellipse from "../assets/ellipse1.png";
import tick from "../assets/tick.svg";
export default function Integration() {
	return (
		<div className="lg:flex w-full bg-[#141315]">
			<div className="flex relative py-[71px] items-center justify-center lg:w-1/2">
				<img src={robot1} className="lg:w-[501px] lg:h-600 z-10" />
				<img src={ellipse} className="absolute" />
			</div>
			<div className="flex flex-col items-center justify-center py-[71px] lg:w-1/2 lg:items-start">
				<div className="Inter text-white text-[6.107vw] text-center font-semibold lg:text-5xl ">
					AI Integration
				</div>
				<div className="Inter text-white text-[4.071vw] text-center font-normal mt-6 w-4/5 lg:text-2xl lg:text-start">
					Daig integrates advanced AI, including NLP and ML, for proposal
					analysis, personalized recommendations, and adaptive learning.
				</div>
				<div className="mt-[51px] flex flex-col gap-5">
					<div className="flex">
						<img src={tick} />
						<div className="Inter text-white text-[4.071vw] text-center font-semibold lg:text-2xl ml-5">
							Artificial Intelligence
						</div>
					</div>
					<div className="flex">
						<img src={tick} alt="" />
						<div className="Inter text-white text-[4.071vw] text-center font-semibold lg:text-2xl ml-5">
							Machine Learning
						</div>
					</div>
					<div className="flex">
						<img src={tick} alt="" />
						<div className="Inter text-white text-[4.071vw] text-center font-semibold lg:text-2xl ml-5">
							Natural Language Processing
						</div>
					</div>
				</div>
				<div className="inline-flex items-start gap-4 mt-12 xl:gap-24">
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
		</div>
	);
}
