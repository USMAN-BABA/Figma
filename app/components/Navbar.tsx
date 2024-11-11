import Image from "next/image";
import Logo from "../assets/Logo.png";
export default function Navbar() {
    return (
        <div>
        <div className="w-[100%] h-[100%]] ml-[1px] py-[16px] px-[220px] bg-[#043873;] flex justify-between ">
            <div className="w-[191px] h-[34px] flex justify-between items-center">
                <Image src={Logo} alt="Logo"></Image>

            </div>
            <div className="w-[737.5px] h-[60px] gap-[60px] flex justify-between ">
                <ul className="w-[549px] h-[23px] gap-[32px] flex justify-between pt-[10px] text-xl  ">
                    <li className=" text-white">Product</li>
                    <li className="text-white">Solution</li>
                    <li className="text-white">Resources</li>
                    <li className="text-white">Pricing</li>
                </ul>
                <div className="w-[126px] h-[60px] gap-[24px] ">
                <button className="w-[126px] h-[60px] rounded-[8px] py-[16px] px-[40px] gap-[10px] bg-[#FFE492;] ml-[50px] items-center" >Login</button>
                </div>
            </div>
            
        </div>
        </div>
    );
}