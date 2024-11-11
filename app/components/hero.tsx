import Arrow from "../assets/Group 212.png";
import Image from "next/image";
import container from "../assets/Image-container.png";
export default function Hero() {
    return (
        <div>
            <div className="w-[100%] h-[900px] ml-[1px] px-[220px] py-[140px] bg-[#043873;] flex justify-between ">

                <div className="w-[650px] h-[361px] gap-[60px] mt-[60px]" >
                    <div className="w-[656px] h-[238px] gap-[24px] ">
                        <p className="w-[656px] h-[154px] text-[64px] text-white">Get more done with Whitespace</p>
                        <p className="w-[656px] h-[60px] text-[19px] text-white mt-[40px]">Project management software
                            that enables your team to collaborate, plan,analyze and manage everyday tasks.  </p>
                        <div className="w-[220px] h-[63px] rounded-[8px] p-[20px] gap-[10px] bg-[#4F9CF9;] mt-[40px] flex justify-between">
                            <p className="w-[159px] h-[23px] text-[17px] hover:cursor-pointer text-white ">Try Whitepace Free</p>
                            <Image src={Arrow} alt="arrow" className="w-[16px] h-[16px] mt-[3px] border-[1px] color-white"></Image>
                        </div>
                    </div>
                </div>
                <div>
                        <Image src={container} alt="container"  className="w-[1000px] h-[600px] gap-[2px] mb-[500px] items-center bg-[#C4DEFD;] items-center" ></Image>
                    </div>

            </div>
        </div>
    )
}