import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

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
