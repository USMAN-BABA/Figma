import Image from "next/image"
import Arrow from "../assets/Group 212.png"
import container from "../assets/Image-container.png"

export default function Extension() {
    return (
        <div>
        <div className="w-[100%] h-[900px] ml-[1px] px-[220px] py-[140px] bg-[#043873;] gap-[100px] flex justify-between ">

            <div className="w-[697px] h-[294px] gap-[60px] mt-[60px]" >
                <div className="w-[697px] h-[171px] gap-[24px] ">
                    <p className="w-[697px] h-[187px] text-[72px] font-bold text-white">Use as Extension</p>
                    <p className="w-[697px] h-[60px] text-[19px] text-white ">Use the web clipper extension, 
                        available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    <div className="w-[171px] h-[63px] rounded-[6px] p-[20px] gap-[10px] bg-[#4F9CF9;] mt-[60px] flex justify-between">
                        <p className="w-[159px] h-[23px] text-[23px] hover:cursor-pointer text-white ">Let's Go</p>
                        <Image src={Arrow} alt="arrow" className="w-[30px] h-[20px] mt-[7px] border-[1px] color-white"></Image>
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
       