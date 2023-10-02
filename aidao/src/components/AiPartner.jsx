import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import robot from "../assets/robot.png";
import voting from "../assets/voting.svg";
import staking from "../assets/staking.svg";
import rewards from "../assets/rewards.svg";
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.6,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
export default function AiPartner() {
	const controls = useAnimation();

	const [ref, inView] = useInView({
		triggerOnce: true, // Trigger animation once
		threshold: 0.1, // Trigger animation when at least 50% of the element is in view
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
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
			<div
				className="flex gap-8 flex-wrap items-center justify-center lg:w-1/2 lg:justify-normal"
				ref={ref}
			>
				{/* Sequence animation container */}
				<motion.ul
					className="container flex gap-8 flex-wrap items-center justify-center"
					variants={container}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0, 1, 2].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex flex-col items-center justify-center bg-[#151516] pt-12 pb-16 w-72 gap-6 hover:bg-[#202020] active:bg-[#181818] hover:scale-110">
								{/* Text for each step */}
								{index === 0 && <img src={voting} className="mt-3 " />}
								{index === 1 && <img src={staking} className="mt-3" />}
								{index === 2 && <img src={rewards} className="mt-3" />}
								<div className="Inter text-white text-2xl text-center font-bold w-40 hover:text-[#FFDF00] active:text-[#D4AF37]">
									{/* Text for each step */}
									{index === 0 && "Voting"}
									{index === 1 && "Staking"}
									{index === 2 && "Rewards Distribution"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>

			{/* <div className="flex gap-8 flex-wrap items-center justify-center lg:w-1/2 lg:justify-normal">
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
			</div> */}
		</div>
	);
}
