import Image from "next/image";
import WorkTogether from "../assets/Work Together Image.png";
import Arrow from "../assets/Group 212.png";
export default function Worktogether() {
    return(
        <div className="w-[100%] h-[50%] gap-[100px]  ml-[1px] px-[220px] py-[140px] flex justify-between">
        <div className="w-[1300px] h-[600px]">
            <Image src={WorkTogether} alt="Work Together"></Image>

        </div>
        <div className="w-[670px] h-[294px] gap-[60px]">
        <div className="w-[670px] h-[171px] gap-[24px]" >
    <p className="w-[670px] h-[60px] mt-[200px] text-[72px] font-bold text-[#212529;]">Work Together</p>
    <p className="w-[670px] h-[200px] text-[18px]  text-[#212529;] mt-[50px]">With whitepace, share
    your notes with your colleagues and collaborate on them.You can also publish a note to the
    internet and share the URL with others.</p>
                    </div>
                <div className="w-[186px] h-[63px] rounded-[6px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9;] mt-[30px] flex justify-between">
                    <p className="w-[82px] h-[23px] text-[18px] hover:cursor-pointer text-[#FFFFFF;] ">Try it now</p>
                    <Image src={Arrow} alt="arrow" className="w-[14px] h-[14px] mt-[5px] border-[1px] "></Image>
                </div>
                </div>


    </div>

    )
}