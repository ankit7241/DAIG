import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
export default function Tokenomics() {
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
		<div className="flex flex-col items-center justify-center pb-32 bg-[#141315] pt-24">
			<div className="flex flex-col gap-2 items-center">
				<motion.ul
					className="flex flex-col items-center justify-center"
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

							<div className="Inter text-white text-[6.107vw] text-center font-semibold lg:text-[42px] hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-125">
								{/* Text for each step */}
								{index === 0 && "TOKENOMICS"}
							</div>
						</motion.li>
					))}
				</motion.ul>

				<motion.ul
					className="flex flex-col items-center justify-center w-full"
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
							<div className="flex flex-col items-center">
								<div className="Inter text-white text-[3.562vw] text-center font-normal w-4/5 lg:text-2xl hover:scale-105">
									{/* Text for each step */}
									{index === 0 &&
										"Art is a Therapy for artists which is why TG-GPT Bot provides freedom for creators to generate AI content and be able mint art as NFT into their wallet right away."}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
			<div className="flex items-center justify-center gap-14 mt-16 lg:order-last">
				<div className="flex flex-col gap-5">
					<div className="Inter text-white text-[4.580vw] text-center font-semibold lg:text-6xl hover:scale-105">
						5%
					</div>
					<div className="Inter text-white text-[2.036vw] text-center font-normal lg:text-2xl hover:scale-105">
						Buy Tax
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div className="Inter text-white text-[4.580vw] text-center font-semibold lg:text-6xl hover:scale-105">
						5%
					</div>
					<div className="Inter text-white text-[2.036vw] text-center font-normal lg:text-2xl hover:scale-105">
						Sell Tax
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center h-[25.954vw] w-4/5 mt-14 gap-4 bg-[#1B1A1C] border-[0.273px] border-[#D69F31] lg:order-2 lg:gap-14">
				<div className="Inter text-white text-[1.667vw] text-center font-medium lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
					Contract Address
				</div>
				<div className="Inter text-white text-[1.945vw] text-center font-bold lg:text-3xl hover:scale-105">
					0x2170ed0880ac9a755fd29b2688956bd959f933f8
				</div>
				<div className="flex w-full justify-evenly items-center">
					<div className="flex flex-col gap-1">
						<div className="Inter text-white text-[1.667vw] text-center font-normal lg lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							Symbol
						</div>
						<div className="Inter text-white text-[2.222vw] text-center font-semibold lg:text-[32px] hover:scale-105">
							$DAIG
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<div className="Inter text-white text-[1.667vw] text-center font-normal lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							Decimal
						</div>
						<div className="Inter text-white text-[2.222vw] text-center font-semibold lg:text-[32px] hover:scale-105">
							14
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<div className="Inter text-white text-[1.667vw] text-center font-normal lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							Network
						</div>
						<div className="Inter text-white text-[2.222vw] text-center font-semibold lg:text-[32px] hover:scale-105">
							ETHEREUM ERC-20
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<div className="Inter text-white text-[1.667vw] text-center font-normal lg:text-2xl hover:text-[#FFDF00] active:text-[#D4AF37] hover:scale-110">
							Supply
						</div>
						<div className="Inter text-white text-[2.222vw] text-center font-semibold lg:text-[32px] hover:scale-105">
							9,000,00
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
