import Image from "next/image";
import container from "../assets/Image-container.png";
import Arrow from "../assets/Group 212.png";
export default function Projectmanage() {
    return (
        <div>
            <div className="w-[100%] h-[750px] ml-[1px] px-[220px] py-[140px] flex justify-between">
                <div className="w-[1480px] mt-[60px] h-[547px] gap-[50px]">
                    <div className="w-[672px] h-[411px] gap-[50px]">
                        <p className="w-[672px] h-[174px] text-[73px] font-bold text-[#212529;]">Project Management</p>
                        <p className="w-[672px] h-[90px] text-[18px]  text-[#212529;] mt-[50px]">Images, videos, PDFs and
                            audio files are supported. Create math expressions and diagrams directly from the app.
                            Take photos with the mobile app and save them to a note. </p>
                        <div className="w-[201px] h-[63px] rounded-[6px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9;] mt-[30px] flex justify-between">
                            <p className="w-[97px] h-[23px] text-[18px] hover:cursor-pointer text-[#FFFFFF;] ">Get Started</p>
                            <Image src={Arrow} alt="arrow" className="w-[14px] h-[14px] mt-[5px] border-[1px] "></Image>
                        </div>

                    </div>

                </div>
                <div>
                    <Image src={container} alt="container" className="w-[1480px] h-[547px] gap-[2px] mb-[500px] items-center bg-[#C4DEFD;] items-center" ></Image>
                </div>

            </div>

          

        </div>
    );
}