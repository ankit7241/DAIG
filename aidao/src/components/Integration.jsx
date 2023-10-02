import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import robot1 from "../assets/robot1.png";
import ellipse from "../assets/ellipse1.png";
import tick from "../assets/tick.svg";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1.2,
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
			delayChildren: 0.5,
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
			delayChildren: 0.9,
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

const button = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 2.8, // Delay the button animation
		},
	},
};

export default function Integration() {
	const controls = useAnimation();
	const buttonControls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true, // Trigger animation once
		threshold: 0.1, // Trigger animation when at least 50% of the element is in view
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
			buttonControls.start("visible"); // Start button animation when in view
		}
	}, [controls, inView, buttonControls]);
	return (
		<div className="lg:flex w-full bg-[#141315]">
			<div className="flex relative py-[71px] items-center justify-center lg:w-1/2">
				<img src={robot1} className="lg:w-[501px] lg:h-600 z-10" />
				<img src={ellipse} className="absolute" />
			</div>
			<div className="flex flex-col items-center justify-center py-[71px] lg:w-1/2 lg:items-start">
				{/* <div className="Inter text-white text-[6.107vw] text-center font-semibold lg:text-5xl ">
					AI Integration
				</div> */}

				<motion.ul
					className="container1 flex items-center justify-center"
					ref={ref}
					variants={container1}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex">
								<div className="Inter text-white text-[6.107vw] text-center font-semibold lg:text-5xl">
									{/* Text for each step */}
									{index === 0 && "AI Integration"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				{/* <div className="Inter text-white text-[4.071vw] text-center font-normal mt-6 w-4/5 lg:text-2xl lg:text-start">
					Daig integrates advanced AI, including NLP and ML, for proposal
					analysis, personalized recommendations, and adaptive learning.
				</div> */}

				<motion.ul
					className="container1 flex items-center justify-center"
					ref={ref}
					variants={container2}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex items-center justify-center lg:justify-start">
								<div className="Inter text-white text-[4.071vw] text-center font-normal mt-6 w-4/5 lg:text-2xl lg:text-start">
									{index === 0 &&
										"Daig integrates advanced AI, including NLP and ML, for proposal analysis, personalized recommendations, and adaptive learning."}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				<div className="mt-[51px] flex flex-col gap-5" ref={ref}>
					{/* Sequence animation container */}
					<motion.ul
						className="container mt-[51px] flex flex-col gap-5"
						variants={container}
						initial="hidden"
						animate={controls}
						transition={{ staggerChildren: 0.2 }}
					>
						{/* Each item in the sequence */}
						{[0, 1, 2].map((index) => (
							<motion.li key={index} className="item" variants={item}>
								{/* Text and tick image for each step */}
								<div className="flex">
									<img src={tick} />
									<div className="Inter text-white text-[4.071vw] text-center font-semibold lg:text-2xl ml-5">
										{/* Text for each step */}
										{index === 0 && "Artificial Intelligence"}
										{index === 1 && "Machine Learning"}
										{index === 2 && "Natural Language Processing"}
									</div>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
				{/* <div className="flex">
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
					</div> */}

				{/* <div className="inline-flex items-start gap-4 mt-12 xl:gap-24">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105">
						Try DAIG
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105 ">
						Whitepaper
					</button>
				</div> */}
				<div className="inline-flex items-start gap-4 mt-12 xl:gap-24">
					{/* Sequence animation container for buttons */}
					<div className="hover:scale-110">
						<motion.button
							className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105"
							variants={button}
							initial="hidden"
							animate={buttonControls}
						>
							Try DAIG
						</motion.button>
					</div>
					<div className="hover:scale-110">
						<motion.button
							className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105 "
							variants={button}
							initial="hidden"
							animate={buttonControls}
						>
							Whitepaper
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
}
