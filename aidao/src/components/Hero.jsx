import React, { useState, useEffect } from "react";
import bgCircleLeft from "../assets/bgCircleLeft.png";
import bgCircleRight from "../assets/bgCircleRight.png";
import blurCircle from "../assets/blurCircle.svg";
import robot from "../assets/robot.png";
const Typewriter = ({ phrases, onTypingComplete }) => {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [typing, setTyping] = useState(true);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		const currentPhrase = phrases[currentPhraseIndex];
		let index = 0;

		const interval = setInterval(() => {
			setTypedText((prevText) => {
				const nextLetter = currentPhrase[index];
				index += 1;
				return prevText + (nextLetter !== undefined ? nextLetter : "");
			});

			if (index === currentPhrase.length) {
				clearInterval(interval);

				setTimeout(() => {
					setTyping(false);

					setTimeout(() => {
						// Erase the typed phrase
						const eraseInterval = setInterval(() => {
							setTypedText((prevText) => {
								if (prevText.length === 0) {
									clearInterval(eraseInterval);

									// Reset the typing animation
									setReset(true);
								}
								return prevText.slice(0, -1);
							});
						}, 100);
					}, 1000);
				}, 1000);
			}
		}, 100);

		return () => clearInterval(interval);
	}, [phrases, currentPhraseIndex, reset]);

	useEffect(() => {
		if (!typing && typedText === "") {
			onTypingComplete();

			// Move to the next phrase
			setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
		}
	}, [typing, typedText, onTypingComplete, phrases, reset]);

	return (
		<div className="Inter text-white text-5xl text-center font-extrabold hidden xl:flex xl:text-start xl:w-[600px]">
			{typedText}
		</div>
	);
};

export default function Hero() {
	const phrases = [
		"Artificial Intelligence",
		"Machine Learning",
		"Natural Language Processing",
	];

	const handleTypingComplete = () => {
		// Handle any logic after the typing animation completes
		console.log("Typing animation complete");
	};
	return (
		<div className="xl:flex xl:justify-evenly xl:items-center xl:mt-32">
			<div className="flex flex-col items-center gap-7 mt-12 relative">
				<div className="border border-white border-r-2 w-[76.336vw] xl:w-[600px]"></div>

				<div className="Inter text-white text-3xl text-center font-extrabold xl:hidden">
					Unlocking the Full Potential Of Daos with AI
				</div>
				<div>
					<div className="Inter text-white text-5xl text-center font-extrabold hidden xl:flex xl:text-start xl:w-[600px]">
						Unlocking the Full Potential Of Daos with
					</div>
					<Typewriter
						phrases={phrases}
						onTypingComplete={handleTypingComplete}
					/>
				</div>

				<div className="Inter text-white text-xl text-center font-medium xl:flex xl:text-start xl:text-3xl xl:w-[600px]">
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

				<div className="inline-flex items-start gap-4 mt-12 xl:gap-24">
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#C2A502] bg-daigGradient xl:p-6 xl:rounded-[2px] hover:bg-goldHoverGradient active:bg-goldActiveGradient hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px]">
						Try DAIG
					</button>
					<button className="flex p-2 justify-center items-center rounded-[0.787px] border-[0.787px] border-[#0C070F] bg-[#29252C] xl:p-6 xl:rounded-[2px] hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0] Inter text-white text-[3vw] text-center font-bold xl:text-[24px] ">
						Whitepaper
					</button>
				</div>

				<div className="flex flex-col gap-8 mt-24">
					<div className="Inter text-white text-[4.580vw] text-center font-bold xl:text-2xl xl:text-start">
						OVERVIEW
					</div>
					<div className="flex justify-center items-center gap-3">
						<div className="flex flex-col items-between gap-5">
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0]">
									AI-DRIVEN PROPOSAL ANALYSIS
								</button>
							</div>
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0]">
									TOKEN-BASED VOTING
								</button>
							</div>
						</div>
						<div className="flex flex-col items-center gap-5">
							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0]">
									PROPOSAL RANKING
								</button>
							</div>

							<div className="flex p-[6.43px] justify-center items-center bg-overviewBg">
								<button className="DM text-white text-xs text-center font-bold xl:text-lg hover:bg-[#202020] active:bg-[#181818] hover:text-[#E0E0E0] active:text-[#D0D0D0]">
									VOTING RECOMMENDATIONS
								</button>
							</div>
						</div>
					</div>
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
