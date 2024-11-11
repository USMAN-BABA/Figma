import container from "../assets./Image-container.png";
import Arrow from "../assets./Group 212.png";

import Image from "next/image";
export default function Customization() {
    return (
        <div className="w-[100%] h-[50%] gap-[100px]  ml-[1px] px-[220px] py-[140px] flex justify-between">
        <div className="w-[1300px] h-[600px]">
        <Image src={container} alt="container"  className="w-[1000px] h-[600px] gap-[2px]
         mb-[500px] items-center bg-[#C4DEFD;] items-center" ></Image>

        </div>
        <div className="w-[670px] h-[411px] gap-[60px]">
        <div className="w-[670px] h-[288px] gap-[24px]" >
    <p className="w-[670px] h-[174px] mt-[100px] text-[72px] font-bold text-[#212529;]">Customize it to your need</p>
    <p className="w-[670px] h-[90px] text-[18px]  text-[#212529;] mt-[50px]">Customise the app with plugins, custom
     themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins
      using the Extension API.</p>
                    </div>
                <div className="w-[186px] h-[63px] rounded-[8px] px-[40px] py-[20px] gap-[8px] bg-[#4F9CF9;] mt-[30px] flex justify-between">
                    <p className="w-[67px] h-[23px] text-[18px] hover:cursor-pointer text-[#FFFFFF;] ">Let's Go</p>
                    <Image src={Arrow} alt="arrow" className="w-[20px] h-[16px] mt-[5px] border-[1px] "></Image>
                </div>
                </div>


    </div>
    );
}