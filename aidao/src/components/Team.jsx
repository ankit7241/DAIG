import React, { useState } from "react";
import team from "../assets/team.png";
import teamLeft from "../assets/teamLeft.png";
import teamRight from "../assets/teamRight.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
export default function Team() {
	return (
		<div className="flex flex-col pt-11 pb-32">
			<div className="flex flex-col items-center gap-7 lg:items-start lg:pl-20">
				<div className="Inter text-[3.562vw] text-start font-bold bg-contributorsGradient text-transparent bg-clip-text lg:text-2xl">
					Contributors
				</div>
				<div className="Inter text-white text-[6.107vw] text-start font-extrabold lg:text-[42px]">
					Our Team
				</div>
			</div>
			<div className="flex flex-col items-center w-full">
				<img src={team} className="lg:w-2/5" />

				{/* <img src={team1} className="absolute z-10 w-[37.148vw] lg:w-2/5" /> */}
				{/* <img
					src={teamLeft}
					className=" relative bottom-[350px] right-3 xl:w-[400px] xl:relative xl:bottom-[490px] xl:right-8"
				/>
				<img
					src={teamRight}
					className="relative bottom-[760px] xl:w-[400px] xl:relative xl:bottom-[1015px] xl:left-12"
				/> */}
				{/* <img src={teamFront} className="absolute left-[60px] z-10 pt-[96px] " />
				<img src={teamLeft} className="absolute left-[25px] pt-[87px] " />
				<img src={teamRight} className="absolute left-[61.64px] pt-[83px] " /> */}
			</div>
		</div>
	);
}
// import React, { useState } from "react";

// const Team = () => {
// 	const [cards, setCards] = useState([1, 2, 3]);

// 	const handleArrowClick = () => {
// 		setCards((prevCards) => {
// 			const updatedCards = [...prevCards.slice(1), prevCards[0]];
// 			return updatedCards;
// 		});
// 	};

// 	return (
// 		<div className="flex items-center justify-center h-screen">
// 			<div className="relative w-64">
// 				{cards.map((card, index) => (
// 					<div
// 						key={index}
// 						className={`absolute w-full h-40 bg-blue-500 rounded-md transform transition-transform duration-500 ${
// 							index === 0 ? "z-10 translate-x-0" : "translate-x-8"
// 						}`}
// 					>
// 						{/* Your card content goes here */}
// 						<p className="text-white text-center mt-6">{card}</p>
// 					</div>
// 				))}
// 			</div>
// 			<button
// 				className="ml-4 px-3 py-1 bg-gray-700 text-white rounded focus:outline-none"
// 				onClick={handleArrowClick}
// 			>
// 				Next
// 			</button>
// 		</div>
// 	);
// };

// export default Team;
