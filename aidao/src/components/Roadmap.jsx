import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roadmapCircle from "../assets/roadmapCircle.svg";
import "./ImageMoveComponent.css";

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

export default function Roadmap() {
	const [isVisible, setIsVisible] = useState(true);
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

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVisible(false);

			setTimeout(() => {
				setIsVisible(true);
			}, 50); // Adjusting the pause time
		}, 4000); // Adjusting the total animation time

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="flex flex-col pt-28 mb-32">
			<div className="flex flex-col pl-5 gap-7 lg:pl-24">
				<motion.ul
					className="flex flex-col"
					ref={ref}
					variants={container1}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							<div className="Inter text-[3.562vw] text-start font-bold bg-trainAIGradient text-transparent bg-clip-text lg:text-2xl hover:scale-105">
								{index === 0 && "END TO END ENCRYPTED"}
							</div>
						</motion.li>
					))}
				</motion.ul>

				<motion.ul
					className="flex flex-col"
					ref={ref}
					variants={container2}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							<div className="Inter text-white text-[6.107vw] text-start font-extrabold lg:text-[42px] hover:scale-105">
								{index === 0 && "ROAD MAP"}
							</div>
						</motion.li>
					))}
				</motion.ul>

				<motion.ul
					className="flex flex-col"
					ref={ref}
					variants={container3}
					initial="hidden"
					animate={controls}
					transition={{ staggerChildren: 0.2 }}
				>
					{[0].map((index) => (
						<motion.li key={index} className="item" variants={item}>
							<div className="Inter text-white text-[4.071vw] text-start font-normal lg:text-2xl lg:w-2/5 hover:scale-105">
								{index === 0 &&
									"Introducing the Secure Message feature allowing users of Web 3.0 to send secure, decentralized, and encrypted messages to anyone anonymously in TG community."}
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
			<div className="relative">
				<div className={`absolute image-container w-[4.326vw] h-[4.326vw]  `}>
					<img
						src={roadmapCircle}
						alt=""
						className="absolute w-[4.326vw] h-[4.326vw] top-[15.623vw] left-[4.326vw] hover:scale-105"
					/>
				</div>
				<div
					className={`absolute image-container w-[4.326vw] h-[4.326vw] ${
						isVisible ? "animate-move-2 " : ""
					}`}
				>
					<img
						src={roadmapCircle}
						alt=""
						className="absolute w-[4.326vw] h-[4.326vw] top-[15.623vw] left-[4.326vw] hover:scale-105"
					/>
				</div>
				<div
					className={`absolute image-container  w-[4.326vw] h-[4.326vw] ${
						isVisible ? "animate-move-3" : ""
					}`}
				>
					<img
						src={roadmapCircle}
						alt=""
						className="absolute w-[4.326vw] h-[4.326vw] top-[15.623vw] left-[4.326vw] hover:scale-105"
					/>
				</div>
				<div
					className={`absolute image-container  w-[4.326vw] h-[4.326vw] ${
						isVisible ? "animate-move-4" : ""
					}`}
				>
					<img
						src={roadmapCircle}
						alt=""
						className="absolute w-[4.326vw] h-[4.326vw] top-[15.623vw] left-[4.326vw] hover:scale-105"
					/>
				</div>
				<div
					className={`absolute image-container  w-[4.326vw] h-[4.326vw] ${
						isVisible ? "animate-move-5" : ""
					}`}
				>
					<img
						src={roadmapCircle}
						alt=""
						className="absolute w-[4.326vw] h-[4.326vw] top-[15.623vw] left-[4.326vw] hover:scale-105"
					/>
				</div>
				<div className="absolute border-[0.148vw] border-dashed border-[#D69F31] h-[26.352vw] top-[22.494vw] left-[6.539vw] hover:scale-105"></div>
				hover:scale-105
				<div className="absolute border-[0.148vw] border-dashed border-[#D69F31] h-[40.405vw] top-[58.372vw] left-[6.539vw] hover:scale-105"></div>
				<div className="absolute border-[0.148vw] border-dashed border-[#D69F31] w-[12.758vw] top-[24.990vw] left-[48.209vw] hover:scale-105"></div>
				<div className="absolute border-[0.148vw] border-dashed border-[#D69F31] w-[18.232vw] top-[53.372vw] left-[12.519vw] hover:scale-105"></div>
				<div className="absolute border-[0.148vw] border-dashed border-[#D69F31] w-[34.693vw] top-[53.372vw] left-[40.051vw] hover:scale-105"></div>
			</div>
			<div className="flex flex-col gap-[12.285vw] mt-[12.570vw]">
				<div className="flex pl-[3.053vw] w-full gap-[14.249vw]">
					<div className="flex flex-col gap-[4.071vw] items-start w-full ml-[9.415vw] pl-[3.308vw] pt-[2.435vw] pb-[7.476vw]">
						<div className="flex items-center gap-[1.117vw]">
							<div className="Inter text-white text-[2.067vw] text-start font-extrabold hover:scale-105 ">
								Phase 1
							</div>
							<div className="Inter text-roadmapFont text-[1.329vw] text-start font-normal hover:scale-105">
								Marketing
							</div>
						</div>
						<div className="Inter text-roadmapFont text-[1.329vw] text-start font-bold hover:scale-105">
							Marketing Website and whitepaper launch
						</div>
						<div className="Inter text-roadmapFont text-[1.181vw] text-start font-normal w-9/12 hover:scale-105">
							In the first phase we will be launching the marketing website and
							our whitepaper which will help users understand our vision.
						</div>
					</div>
					<div className="flex flex-col gap-4 items-start w-full lg:pl-[3.308vw] pt-[2.435vw] pb-[7.476vw]">
						<div className="flex items-center gap-[1.117vw]">
							<div className="Inter text-white text-[2.067vw] text-start font-extrabold hover:scale-105 ">
								Phase 2
							</div>
							<div className="Inter text-roadmapFont text-[1.329vw] text-start font-normal hover:scale-105">
								Marketing
							</div>
						</div>
						<div className="Inter text-roadmapFont text-[1.329vw] text-start font-bold hover:scale-105">
							Mobile numbers launch 1
						</div>
						<div className="Inter text-roadmapFont text-[1.181vw] text-start font-normal w-9/12 hover:scale-105">
							First lot of numbers will be launched and will be claimable from
							the website.
						</div>
					</div>
				</div>
				<div className="flex  pl-3 w-full gap-14">
					<div className="flex flex-col gap-4 items-start w-full ml-[17.466vw] pl-[3.308vw] pt-[2.435vw] pb-[7.476vw]">
						<div className="flex items-center gap-[1.117vw]">
							<div className="Inter text-white text-[2.067vw] text-start font-extrabold hover:scale-105 ">
								Phase 3
							</div>
							<div className="Inter text-roadmapFont text-[1.329vw] text-start font-normal hover:scale-105">
								Marketing
							</div>
						</div>
						<div className="Inter text-roadmapFont text-[1.329vw] text-start font-bold hover:scale-105">
							Mobile numbers launch 2
						</div>
						<div className="Inter text-roadmapFont text-[1.181vw] text-start font-normal w-9/12 hover:scale-105">
							Second lot of numbers will be launched and will be claimable from
							the website.
						</div>
					</div>
					<div className="flex flex-col gap-4 items-start w-full pl-[3.308vw] pt-[2.435vw] pb-[7.476vw]">
						<div className="flex items-center gap-[1.117vw]">
							<div className="Inter text-white text-[2.067vw] text-start font-extrabold hover:scale-105 ">
								Phase 4
							</div>
							<div className="Inter text-roadmapFont text-[1.329vw] text-start font-normal hover:scale-105">
								Marketing
							</div>
						</div>
						<div className="Inter text-roadmapFont text-[1.329vw] text-start font-bold hover:scale-105">
							Calling, Messaging using telphone number launch
						</div>
						<div className="Inter text-roadmapFont text-[1.181vw] text-start font-normal w-9/12 hover:scale-105">
							At this phase we will launch the feature using which you can
							message/call others using their telphone number.
						</div>
					</div>
				</div>
				<div className="flex pl-3 w-full gap-14">
					<div className="flex flex-col gap-4 items-start w-full ml-[9.415vw] pl-[3.308vw] lg:pt-[2.435vw] lg:pb-[7.476vw]">
						<div className="flex items-center gap-[1.117vw]">
							<div className="Inter text-white text-[2.067vw] text-start font-extrabold hover:scale-105 ">
								Phase 5
							</div>
							<div className="Inter text-roadmapFont text-[1.329vw] text-start font-normal hover:scale-105">
								Marketing
							</div>
						</div>
						<div className="Inter text-roadmapFont text-[1.329vw] text-start font-bold hover:scale-105">
							Other utilties launch
						</div>
						<div className="Inter text-roadmapFont text-[1.181vw] text-start font-normal w-4/12 hover:scale-105">
							Loging with telphone, video calling, OTP verification and all the
							other mobile number related utlities will be launched in this
							phase.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
