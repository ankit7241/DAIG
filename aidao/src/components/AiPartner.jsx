import robot from "../assets/robot.png";
import voting from "../assets/voting.svg";
import staking from "../assets/staking.svg";
import rewards from "../assets/rewards.svg";
export default function AiPartner() {
	return (
		<div className="flex flex-col items-center justify-center pt-5 mb-24 gap-20 lg:flex-row">
			<div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start lg:ml-14">
				<img src={robot} className="w-20 h-32 lg:h-80 lg:w-52" />

				<div className="flex flex-col items-center justify-center gap-5 lg:items-start">
					<div className="Inter text-[3.562vw] text-center font-bold bg-trainAIGradient text-transparent bg-clip-text lg:text-2xl">
						Streamline Decision Making
					</div>
					<div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[42px] lg:w-[413px] lg:text-start">
						Your AI Governance Partner
					</div>
					<div className="Inter text-white text-[4.071vw] text-center font-normal px-2 lg:text-2xl lg:w-11/12 lg:text-start">
						Daig's smart contracts will define the token properties and govern
						the platform's core functionalities, such as voting, staking, and
						rewards distribution
					</div>
				</div>
			</div>
			<div className="flex gap-8 flex-wrap items-center justify-center lg:w-1/2 lg:justify-normal">
				<div className="flex flex-col items-center justify-center bg-[#151516] pt-12 pb-16 w-72 gap-6 hover:bg-[#202020] active:bg-[#181818] hover:scale-105">
					<img src={voting} alt="" />
					<div className="Inter text-white text-2xl text-center font-bold ">
						Voting
					</div>
				</div>
				<div className="flex flex-col items-center justify-center bg-[#151516] pt-12 pb-16 w-72 gap-6 hover:bg-[#202020] active:bg-[#181818] hover:scale-105">
					<img src={staking} alt="" />
					<div className="Inter text-white text-2xl text-center font-bold">
						Staking
					</div>
				</div>
				<div className="flex flex-col items-center justify-center bg-[#151516] pt-12 pb-16 w-72 gap-6 hover:bg-[#202020] active:bg-[#181818] hover:scale-105">
					<img src={rewards} alt="" />
					<div className="Inter text-white text-2xl text-center font-bold w-40">
						Rewards Distribution
					</div>
				</div>
			</div>
		</div>
	);
}
