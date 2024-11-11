import Image from "next/image";
import Apple from "../assets/Apple.png";
import Microsoft from "../assets/microsoft 1.png";
import Slack from "../assets/Group.png";
import Google from "../assets/Group 246.png";
export default function Sponsers() {
    return (

        <div>
            <div className="w-[100%] h-[500px] ml-[1px] px-[220px] py-[140px] ">
                <div className="w-[1482px] h-[87px] font-bold text-[72px] pl-[500px] text-bold text-[#212529;]">
                    <p>Our Sponsers</p>

                </div>
                <div className="w-[1482px] h-[71px] mt-[100px] flex justify-between">
                    <div className="w-[55.47px] h-[68px] gap-[4px]">
                        <Image src={Apple} alt="apple" className="w-[55.47px] h-[68px] "></Image>

                    </div>
                    <div className="w-[287px] h-[62px] gap-[4px]">
                   <Image src={Microsoft} alt="microsoft" className="w-[287px] h-[62px] "></Image>
                    </div>
                    <div className="w-[280px] h-[71px] gap-[4px]">
                    <Image src={Slack} alt="Slack" className="w-[280px] h-[71px]"></Image>
                    </div>
                    <div className="w-[211px] h-[69.1px] gap-[4px]">
                    <Image src={Google} alt="Google" className="w-[211px] h-[69.1px] "></Image>
                    </div>


                </div>

            </div>
        </div>

    )
}