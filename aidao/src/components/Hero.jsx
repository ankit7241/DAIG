import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgCircleLeft from "../assets/bgCircleLeft.png";
import bgCircleRight from "../assets/bgCircleRight.png";
import blurCircle from "../assets/blurCircle.svg";
import robot from "../assets/robot.png";
const container1 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.6,
		},
	},
};
const container2 = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 0.3,
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
			delay: 0.5, // Delay the button animation
		},
	},
};
const Typewriter = ({ phrases, onTypingComplete, initialRender }) => {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [typing, setTyping] = useState(true);

	useEffect(() => {
		const currentPhrase = phrases[currentPhraseIndex];
		let index = 0;

		const interval = setInterval(() => {
			setTypedText((prevText) => {
				const nextLetter = currentPhrase[index];
				if (prevText.charAt(prevText.length - 1) === nextLetter) {
					index += 1;
				}
				return prevText + (nextLetter !== undefined ? nextLetter : "");
			});

			if (index === currentPhrase.length) {
				clearInterval(interval);

				setTimeout(() => {
					const eraseInterval = setInterval(() => {
						setTypedText((prevText) => {
							if (prevText.length === 0) {
								clearInterval(eraseInterval);

								setTyping(true);

								setCurrentPhraseIndex(
									(prevIndex) => (prevIndex + 1) % phrases.length
								);
							}
							return prevText.slice(0, -1);
						});
					}, 100);
				}, 1000);
			}
		}, 100);
		if (initialRender) {
			setTypedText(phrases[currentPhraseIndex]);
		}

		return () => clearInterval(interval);
	}, [phrases, currentPhraseIndex, initialRender]);

	useEffect(() => {
		if (!typing && typedText === "") {
			onTypingComplete();
		}
	}, [typing, typedText, onTypingComplete]);

	return (
		<div className="flex justify-center items-center">
			<div className="Inter text-[#FFDF00] text-2xl text-center font-extrabold xl:text-5xl xl:flex xl:text-start xl:w-[700px] z-10">
				{typedText}
			</div>
		</div>
	);
};
export default function Hero() {
	const [initialRender, setInitialRender] = useState(true);
	const controls = useAnimation();
	const buttonControls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true, // Trigger animation once
		threshold: 0.1, // Trigger animation when at least 50% of the element is in view
	});

	useEffect(() => {
		if (inView && !initialRender) {
			controls.start("visible");
			console.log("Controls:", controls); // Log animation controls
			buttonControls.start("visible");
			console.log("Button Controls:", buttonControls); // Log button animation controls
		}
	}, [controls, buttonControls, inView, initialRender]);
	const phrases = [
		"Artificial Intelligence",
		"Machine Learning",
		"Natural Language Processing",
	];

	const handleTypingComplete = () => {
		console.log("Typing animation complete");
	};
	return (
		<div className="xl:flex xl:justify-evenly xl:items-center xl:mt-32">
			<div className="flex flex-col items-center gap-7 mt-12 relative xl:items-start">
				<div className="border border-white border-r-2 w-[76.336vw] md:w-[500px] xl:w-[600px]"></div>

				<div className="flex flex-col ">
					<div className="Inter text-white text-2xl xl:text-5xl text-center font-extrabold xl:flex xl:text-start xl:w-[600px] z-10">
						Unlocking the Full Potential Of DAOs with
					</div>
					<Typewriter
						phrases={phrases}
						onTypingComplete={handleTypingComplete}
						initialRender={initialRender}
					/>
				</div>

				<div className="Inter text-white text-xl text-center font-medium xl:flex xl:text-start xl:text-3xl xl:w-[600px] z-10">
					Empower DeFi Governance with AI-Powered Decisions
				</div>
				<div className="flex justify-between w-full absolute top-28 xl:hidden -z-10">
					<img src={bgCircleLeft} className="w-[30vw]" />
					<img src={bgCircleRight} className="w-[30vw]" />
				</div>
				<div className="flex justify-between w-full shrink-0 blur-[14.880951881408691px] fill-[#896726] absolute top-96 xl:hidden -z-10">
					<img src={blurCircle} className="w-1/4 h-1/4" />
					<img src={blurCircle} className="w-1/3 h-1/3" />
					<img src={blurCircle} className="w-1/4 h-1/4" />
				</div>
				<img src={robot} className="w-2/3 xl:hidden" />

				{/* <div className="inline-flex items-start gap-4 mt-12 xl:gap-24">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105">
						Try DAIG
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] hover:scale-105">
						Whitepaper
					</button>
				</div> */}
				<div
					className="inline-flex items-start gap-4 mt-12 xl:gap-24"
					ref={ref}
				>
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

				<div className="flex flex-col gap-8 mt-24">
					<div className="Inter text-white text-[4.580vw] text-center font-bold xl:text-2xl xl:text-start">
						OVERVIEW
					</div>
					<div className="flex justify-center items-center gap-3" ref={ref}>
						<div className="flex items-between gap-5">
							{/* Apply animations to ul and stagger li items */}
							<motion.ul
								className="flex flex-col items-center gap-5"
								variants={container1}
								initial="hidden"
								animate={controls}
								transition={{ staggerChildren: 0.2 }}
							>
								{[0, 1].map((index) => (
									<motion.li key={index} variants={item}>
										<div className="flex p-[6.43px] justify-center items-center bg-overviewBg hover:scale-110">
											<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
												{index === 0 && "AI-DRIVEN PROPOSAL ANALYSIS"}
												{index === 1 && "TOKEN-BASED VOTING"}
											</button>
										</div>
									</motion.li>
								))}
							</motion.ul>
							<motion.ul
								className="flex flex-col items-center gap-5"
								variants={container2}
								initial="hidden"
								animate={controls}
								transition={{ staggerChildren: 0.2 }}
							>
								{[0, 1].map((index) => (
									<motion.li key={index} variants={item}>
										<div className="flex p-[6.43px] justify-center items-center bg-overviewBg hover:scale-110">
											<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
												{index === 0 && "PROPOSAL RANKING"}
												{index === 1 && "VOTING RECOMMENDATIONS"}
											</button>
										</div>
									</motion.li>
								))}
							</motion.ul>
						</div>
					</div>
					{/* <div className="flex justify-center items-center gap-3">
						<div className="flex flex-col items-between gap-5">
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
									AI-DRIVEN PROPOSAL ANALYSIS
								</button>
							</div>
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
									TOKEN-BASED VOTING
								</button>
							</div>
						</div>
						<div className="flex flex-col items-center gap-5">
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
									PROPOSAL RANKING
								</button>
							</div>

							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:text-[#FFDF00] active:text-[#D4AF37]">
									VOTING RECOMMENDATIONS
								</button>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<img src={robot} className="hidden xl:flex w-[635px] h-[1024px]" />
			<div className="hidden xl:flex justify-between w-full absolute top-96">
				<img src={bgCircleLeft} className="w-[30vw]" />
				<img src={bgCircleRight} className="w-[30vw]" />
			</div>
			<div className="hidden xl:flex justify-between w-full shrink-0 fill-[#896726] absolute top-3/4 -z-10">
				<img src={blurCircle} className="w-56 h-56 absolute top-44 left-36" />
				<img src={blurCircle} className="w-96 h-96 absolute right-96" />
				<img src={blurCircle} className="w-56 h-56 absolute top-44 right-2" />
			</div>
		</div>
	);
}
