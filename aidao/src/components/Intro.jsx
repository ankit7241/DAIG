import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bitcoin from "../assets/bitcoin.png";
import graphLine from "../assets/graphLine.svg";
import ellipse from "../assets/introEllipse.svg";
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
export default function Intro() {
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
		<div className="flex flex-col items-center gap-20 my-[18.575vw] lg:my-6 lg:flex-row">
			<div className="flex flex-col gap-3 items-center w-3/4 lg:items-start lg:ml-32 lg:w-2/5">
				<motion.ul
					className="container flex flex-col items-center lg:items-start"
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
								<div className="Inter text-white text-[3.562vw] text-center font-bold lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
									{/* Text for each step */}
									{index === 0 && "THE FUTURE OF AI"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				<motion.ul
					className="container flex flex-col items-center lg:items-start"
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
							<div className="flex">
								<div className="Inter text-[6.107vw] text-center font-extrabold bg-introTextGradient text-transparent bg-clip-text lg:text-start lg:text-[42px] hover:scale-105">
									{/* Text for each step */}
									{index === 0 && "Elevate Defi Governance"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>

				{/* <div className="Inter text-white text-[6.107vw] text-center font-normal lg:text-[42px]">
					Meet DAIG!
				</div> */}

				{/* Sequence animation container */}
				<motion.ul
					className="container flex flex-col items-center lg:items-start"
					ref={ref}
					variants={container3}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex">
								<div className="Inter text-white text-[6.107vw] text-center font-normal lg:text-[42px] hover:scale-105">
									{/* Text for each step */}
									{index === 0 && "Meet DAIG!"}
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
					{/* Each item in the sequence */}
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							{/* Text and tick image for each step */}
							<div className="flex">
								<div className="Inter text-white text-[3.562vw] text-center font-normal lg:text-2xl lg:text-start hover:scale-105">
									{/* Text for each step */}
									{index === 0 &&
										"Daig's AI evaluates proposals for feasibility, alignment with goals, and risks, empowering informed voting decisions"}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
			<div className="relative">
				<img
					src={bitcoin}
					className="lg:w-[758px] lg:h-[758px] shrink-0 hover:scale-105"
				/>
				<img
					src={graphLine}
					className="w-[34.860vw] h-[24.427vw] absolute top-0 left-0 -z-10 lg:w-[467px] lg:h-[205px]  hover:scale-105"
				/>
				<img
					src={ellipse}
					className="w-[34.860vw] h-[24.427vw] absolute bottom-0 right-0 -z-10"
				/>
			</div>
		</div>
	);
}
