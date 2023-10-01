import team from "../assets/team.png";
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
				{/* <img
					src={teamFront}
					className="relative top-12 z-10 xl:w-[380px] xl:relative"
				/>
				<img
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
