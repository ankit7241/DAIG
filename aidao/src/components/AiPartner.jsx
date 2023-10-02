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
const container1 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 1.5,
		},
	},
};
const container2 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1.0,
			staggerChildren: 1.5,
		},
	},
};
const container3 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1.4,
			staggerChildren: 1.5,
		},
	},
};
const container4 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1.8,
			staggerChildren: 1.5,
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
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<div className="flex flex-col items-center justify-center pt-5 mb-24 gap-20 lg:flex-row">
			<div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start lg:ml-14">
				<motion.ul
					className="flex flex-col items-center justify-center lg:ml-14"
					ref={ref}
					variants={container1}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							<div className="flex flex-col justify-center w-[20.356vw] h-[32.570vw] lg:h-80 lg:w-52 items-center">
								{index === 0 && (
									<img
										src={robot}
										className="w-[20.356vw] h-[32.570vw] lg:h-80 lg:w-52 lg:ml-20 hover:scale-110"
									/>
								)}
							</div>
						</motion.li>
					))}
				</motion.ul>

				<div className="flex flex-col items-center justify-center gap-5 lg:items-start">
					<motion.ul
						className="container flex flex-col items-center lg:items-start"
						ref={ref}
						variants={container2}
						initial="hidden"
						animate={controls}
						transition={{ staggerChildren: 0.2 }}
					>
						{[0].map((index) => (
							<motion.li key={index} className="item" variants={item}>
								<div className="flex">
									<div className="Inter text-[3.562vw] text-center font-bold bg-trainAIGradient text-transparent bg-clip-text lg:text-2xl hover:scale-105">
										{index === 0 && "Streamline Decision Making"}
									</div>
								</div>
							</motion.li>
						))}
					</motion.ul>

					<motion.ul
						className="container flex flex-col items-center lg:items-start"
						ref={ref}
						variants={container3}
						initial="hidden"
						animate={controls}
						transition={{ staggerChildren: 0.2 }}
					>
						{[0].map((index) => (
							<motion.li key={index} className="item" variants={item}>
								<div className="flex">
									<div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[42px] lg:w-[413px] lg:text-start hover:scale-105">
										{index === 0 && "Your AI Governance Partner"}
									</div>
								</div>
							</motion.li>
						))}
					</motion.ul>

					<motion.ul
						className="container flex flex-col items-center lg:items-start"
						ref={ref}
						variants={container4}
						initial="hidden"
						animate={controls}
						transition={{ staggerChildren: 0.2 }}
					>
						{[0].map((index) => (
							<motion.li key={index} className="item" variants={item}>
								<div className="flex">
									<div className="Inter text-white text-[4.071vw] text-center font-normal px-2 lg:text-2xl lg:w-11/12 lg:text-start hover:scale-105">
										{index === 0 &&
											"Daig's smart contracts will define the token properties and govern the platform's core functionalities, such as voting, staking, and rewards distribution"}
									</div>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
			<div
				className="flex gap-8 flex-wrap items-center justify-center lg:w-1/2 lg:justify-normal lg:mr-20"
				ref={ref}
			>
				<motion.ul
					className="container flex gap-8 flex-wrap items-center justify-center"
					variants={container}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{[0, 1, 2].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							<div className="flex flex-col items-center justify-center bg-[#151516] pt-12 pb-16 w-72 gap-6 hover:bg-[#202020] active:bg-[#181818] hover:scale-110">
								{index === 0 && <img src={voting} className="mt-3 " />}
								{index === 1 && <img src={staking} className="mt-3" />}
								{index === 2 && <img src={rewards} className="mt-3" />}
								<div className="Inter text-white text-2xl text-center font-bold w-40 hover:text-[#FFDF00] active:text-[#D4AF37]">
									{index === 0 && "Voting"}
									{index === 1 && "Staking"}
									{index === 2 && "Rewards Distribution"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</div>
	);
}
