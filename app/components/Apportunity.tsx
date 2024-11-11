import Arrow from "../assets/Group 212.png";
import Image from "next/image";
export default function Apportunity() {
    return (
        <div>
            <div className="w-[100%] h-[574px] ml-[1px] px-[220px] py-[140px] bg-[#043873;]">

                <div className="w-[1481px] h-[294px] gap-[60px]" >
                    <div className="w-[1064px] h-[171px] gap-[24px] pl-[300px]">
                        <p className="w-[1064px] h-[87px] text-[72px] font-bold text-white">You work, everywhere you are</p>
                        <p className="w-[1064px] h-[60px] mt-[30px] text-[19px] text-white">Access your notes from your
                             computer, phone or tablet by synchronising with various services, including whitepace, 
                             Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS.
                              A terminal app is also available! </p>
                        <div className="w-[195px] h-[63px] rounded-[8px] ml-[55%] mt-[60px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9;] mt-[40px] flex justify-between">
                            <p className="w-[91px] h-[23px] text-[18px]  hover:cursor-pointer text-white ">Try Taskey</p>
                            <Image src={Arrow} alt="arrow" className="w-[18px] h-[16px] mt-[7px] border-[1px] color-white"></Image>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}