import React, { useState } from "react";
import team from "../assets/team.png";
import teamLeft from "../assets/teamLeft.png";
import teamRight from "../assets/teamRight.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
// export default function Team() {
// 	return (
// <div className="flex flex-col pt-11 pb-32">
// 	<div className="flex flex-col items-center gap-7 lg:items-start lg:pl-20">
// 		<div className="Inter text-[3.562vw] text-start font-bold bg-contributorsGradient text-transparent bg-clip-text lg:text-2xl">
// 			Contributors
// 		</div>
// 		<div className="Inter text-white text-[6.107vw] text-start font-extrabold lg:text-[42px]">
// 			Our Team
// 		</div>
// 	</div>
// 			<div className="flex flex-col items-center w-full">
// 				<img src={team} className="lg:w-2/5" />

// 				{/* <img src={team1} className="absolute z-10 w-[37.148vw] lg:w-2/5" /> */}
// 				{/* <img
// 					src={teamLeft}
// 					className=" relative bottom-[350px] right-3 xl:w-[400px] xl:relative xl:bottom-[490px] xl:right-8"
// 				/>
// 				<img
// 					src={teamRight}
// 					className="relative bottom-[760px] xl:w-[400px] xl:relative xl:bottom-[1015px] xl:left-12"
// 				/> */}
// 				{/* <img src={teamFront} className="absolute left-[60px] z-10 pt-[96px] " />
// 				<img src={teamLeft} className="absolute left-[25px] pt-[87px] " />
// 				<img src={teamRight} className="absolute left-[61.64px] pt-[83px] " /> */}
// 			</div>
// 		</div>
// 	);
// }
// // import React, { useState } from "react";

// // const Team = () => {
// // 	const [cards, setCards] = useState([1, 2, 3]);

// // 	const handleArrowClick = () => {
// // 		setCards((prevCards) => {
// // 			const updatedCards = [...prevCards.slice(1), prevCards[0]];
// // 			return updatedCards;
// // 		});
// // 	};

// // 	return (
// // 		<div className="flex items-center justify-center h-screen">
// // 			<div className="relative w-64">
// // 				{cards.map((card, index) => (
// // 					<div
// // 						key={index}
// // 						className={`absolute w-full h-40 bg-blue-500 rounded-md transform transition-transform duration-500 ${
// // 							index === 0 ? "z-10 translate-x-0" : "translate-x-8"
// // 						}`}
// // 					>
// // 						{/* Your card content goes here */}
// // 						<p className="text-white text-center mt-6">{card}</p>
// // 					</div>
// // 				))}
// // 			</div>
// // 			<button
// // 				className="ml-4 px-3 py-1 bg-gray-700 text-white rounded focus:outline-none"
// // 				onClick={handleArrowClick}
// // 			>
// // 				Next
// // 			</button>
// // 		</div>
// // 	);
// // };https://flxt.tmsimg.com/assets/p17432198_v_h8_ad.jpg

// import React, { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const Team = () => {
// 	// State to track the current card index
// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	// Get the swipe handlers
// 	const handlers = useSwipeable({
// 		onSwipedLeft: () => {
// 			// Increment the current index
// 			setCurrentIndex(currentIndex + 1);

// 			// Check if we have reached the end of the array
// 			if (currentIndex === cards.length - 1) {
// 				// Reset the current index to the beginning of the array
// 				setCurrentIndex(0);
// 			}
// 		},
// 		onSwipedRight: () => {
// 			// Decrement the current index
// 			setCurrentIndex(currentIndex - 1);

// 			// Check if we have reached the beginning of the array
// 			if (currentIndex === 0) {
// 				// Reset the current index to the end of the array
// 				setCurrentIndex(cards.length - 1);
// 			}
// 		},
// 	});

// 	// Get the three cards
// 	const cards = [
// 		{ photo: "https://flxt.tmsimg.com/assets/p17432198_v_h8_ad.jpg" },
// 		{
// 			photo:
// 				"https://www.redwolf.in/image/cache/catalog/posters/marvel-black-panther-wakanda-forever-poster-255x340.jpg",
// 		},
// 		{
// 			photo:
// 				"https://www.redwolf.in/image/cache/catalog/posters/marvel-black-panther-wakanda-forever-poster-255x340.jpg",
// 		},
// 	];

// 	// Render the current card
// 	return (
// 		<div class="grid grid-cols-3 gap-10">
// 			<img
// 				class="col-span-1 h-full max-w-full object-cover rounded-md shadow-md"
// 				src={cards[currentIndex].photo}
// 				alt={cards[currentIndex].name}
// 			/>
// 			<img
// 				class="col-span-1 h-full max-w-full object-cover rounded-md shadow-md opacity-50"
// 				src={cards[currentIndex - 1].photo}
// 				alt={cards[currentIndex - 1].name}
// 			/>
// 			<img
// 				class="col-span-1 h-full max-w-full object-cover rounded-md shadow-md opacity-50"
// 				src={cards[currentIndex + 1].photo}
// 				alt={cards[currentIndex + 1].name}
// 			/>
// 		</div>
// 	);
// };

// export default Team;

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Team() {
	return (
		<div className="flex flex-col pt-11 pb-32">
			<div className="flex flex-col items-center gap-7 lg:items-start lg:pl-20">
				<div className="Inter text-[3.562vw] text-start font-bold bg-contributorsGradient text-transparent bg-clip-text lg:text-2xl hover:scale-105">
					Contributors
				</div>
				<div className="Inter text-white text-[6.107vw] text-start font-extrabold lg:text-[42px] mb-7 hover:scale-105">
					Our Team
				</div>
			</div>
			<div className="flex items-center justify-center">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className="swiper-container"
					centeredSlides={true}
				>
					<SwiperSlide className="swiper-slide">
						<div className="flex items-center justify-center">
							<img
								src={team1}
								alt=""
								className="w-[267.544px] lg:w-[404.935px] hover:scale-105"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="flex items-center justify-center hover:scale-105">
							<img
								src={team2}
								alt=""
								className="w-[287.544px] lg:w-[434.935px] "
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="flex items-center justify-center ">
							<img
								src={team3}
								alt=""
								className="w-[297.544px] lg:w-[444.935px] hover:scale-105"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

// export default function Team() {
// 	const slides = [
// 		{ id: 1, image: team1 },
// 		{ id: 2, image: team2 },
// 		{ id: 3, image: team3 },
// 	];

// 	return (
// 		<div className="flex items-center justify-center">
// 			<Swiper
// 				effect="cube" // Set the cube effect
// 				cubeEffect={{
// 					slideShadows: false,
// 					shadow: false,
// 					shadowOffset: 20,
// 					shadowScale: 0.94,
// 				}}
// 				className="swiper-container"
// 				slidesPerView={1}
// 				spaceBetween={50}
// 			>
// 				{slides.map((slide) => (
// 					<SwiperSlide key={slide.id} className="swiper-slide">
// 						<div className="flex items-center justify-center h-full">
// 							<img src={slide.image} alt="" />
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 		</div>
// 	);
// }
