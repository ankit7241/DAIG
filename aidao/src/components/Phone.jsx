import telegram from "../assets/telegram.png";
import mobile from "../assets/mobile.png";

export default function Phone() {
	return (
		<div className="flex justify-center bg-[#141315] pt-12 pb-14">
			<div className="flex flex-col bg-[#8A6305] rounded-lg items-center pt-16 gap-32 w-11/12 lg:flex-row">
				<div className="flex flex-col gap-3 items-center lg:items-start lg:pl-11">
					<div className="Inter text-[3.562vw] text-center font-bold bg-phoneHeadingGradient text-transparent bg-clip-text lg:text-2xl hover:scale-105">
						GET GOING WITH DAIG
					</div>
					<div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[42px] hover:scale-105">
						AI in your Pocket
					</div>
					<div className="Inter text-white text-[4.071vw] text-center font-normal lg:text-2xl lg:text-start hover:scale-105">
						Get your hands on the GPT Guru AI phone application available for
						Android.
					</div>
					<img src={telegram} className="w-1/2 lg:w-2/5 hover:scale-105" />
				</div>
				<div>
					<img src={mobile} alt="" className="hover:scale-105" />
				</div>
			</div>
		</div>
	);
}
