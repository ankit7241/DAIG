import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import robot1 from "../assets/robot1.png";
import ellipse from "../assets/ellipse1.png";
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
			delay: 3.0, // Delay the button animation
		},
	},
};
export default function TrainAI() {
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
		<div className="flex flex-col gap-20 mt-14 lg:my-28 " ref={ref}>
			<div className="flex flex-col items-center justify-center gap-5 ">
				<motion.ul
					className="container flex flex-col items-center justify-center"
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
								<div className="Inter text-[3.562vw] text-center font-bold bg-trainAIGradient text-transparent bg-clip-text lg:text-2xl">
									{/* Text for each step */}
									{index === 0 && "EARN PASSIVE INCOME"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				<motion.ul
					className="container flex flex-col items-center justify-center"
					variants={container2}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex">
								<div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[42px]">
									{/* Text for each step */}
									{index === 0 && "Train GURU AI to Earn"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				{/* <div className="Inter text-white text-[4.071vw] text-center font-normal px-2 lg:text-2xl lg:w-2/5 ">
					Join hands with TG-GPT Bot to train it's AI model on various topics of
					Web 3.0 and start earning passive income in $GPTG.
				</div> */}

				<motion.ul
					className="container flex flex-col items-center justify-center"
					variants={container3}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex flex-col items-center justify-center">
								<div className="Inter text-white text-[4.071vw] text-center font-normal px-2 lg:text-2xl xl:w-2/5">
									{/* Text for each step */}
									{index === 0 &&
										"Join hands with TG-GPT Bot to train it's AI model on various topics of Web 3.0 and start earning passive income in $GPTG."}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				<div className="inline-flex items-start gap-4 mt-12 xl:gap-24 lg:hidden">
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
			<div className="flex relative items-center justify-center">
				<img src={robot1} className="lg:w-[501px] lg:h-600 z-10" />
				<img src={ellipse} className="absolute" />
			</div>
			<div className="flex items-center justify-center">
				{/* <div className="hidden lg:inline-flex lg:items-start lg:gap-24">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105">
						
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105 ">
						Whitepaper
					</button>
				</div> */}
				<div
					className="hidden lg:inline-flex lg:items-start lg:gap-24"
					ref={ref}
				>
					<div className="hover:scale-110">
						{/* Sequence animation container for buttons */}
						<motion.button
							className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105"
							variants={button}
							initial="hidden"
							animate={buttonControls}
						>
							Try TG-GPT Bot
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
