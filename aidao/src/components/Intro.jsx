import bitcoin from "../assets/bitcoin.png";
import graphLine from "../assets/graphLine.svg";
import ellipse from "../assets/introEllipse.svg";
export default function Intro() {
	return (
		<div className="flex flex-col items-center gap-20 my-[18.575vw] lg:my-6 lg:flex-row">
			<div className="flex flex-col gap-3 items-center w-3/4 lg:items-start lg:ml-32 lg:w-2/5">
				<div className="Inter text-white text-[3.562vw] text-center font-bold lg:text-2xl">
					THE FUTURE OF AI
				</div>
				<div className="Inter text-[6.107vw] text-center font-extrabold bg-introTextGradient text-transparent bg-clip-text lg:text-start lg:text-[42px]">
					Elevate Defi Governance
				</div>
				<div className="Inter text-white text-[6.107vw] text-center font-normal lg:text-[42px]">
					Meet DAIG!
				</div>
				<div className="Inter text-white text-[3.562vw] text-center font-normal lg:text-2xl lg:text-start">
					Daig's AI evaluates proposals for feasibility, alignment with goals,
					and risks, empowering informed voting decisions
				</div>
			</div>
			<div className="relative">
				<img src={bitcoin} className="lg:w-[758px] lg:h-[758px] shrink-0" />
				<img
					src={graphLine}
					className="w-[34.860vw] h-[24.427vw] absolute top-0 left-0 -z-10 lg:w-[467px] lg:h-[205px]"
				/>
				<img
					src={ellipse}
					className="w-[34.860vw] h-[24.427vw] absolute bottom-0 right-0 -z-10"
				/>
			</div>
		</div>
	);
}
