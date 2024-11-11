import Image from "next/image";
import Logo from "../assets/Logo.png";
export default function Footer() {
    return (
        <div>
            <div className="w-[100%] h-[400px] ml-[1px] px-[220px] py-[140px] bg-[#043873;] gap-[200px] ">
                <div className="w-[1480px] h-[289px] gap-[100px]">
                    <div className="w-[1480px] h-[169px] gap-[100px] flex justify-between">
                        <div className="w-[295px] h-[169px] gap-[15px]">
                            <Image src={Logo} alt="Logo" className="w-[191px] h-[34px] "></Image>
                            <ul className="w-[240px] h-[120px] text-[18px] mt-[5px] text-white ">
                                <li>whitepace was created for the new ways we live and work. We make a better workspace
                                     around the world.</li>
                            </ul>

                        </div>
                        <div className="w-[295px] h-[127px] gap-[15px] ">
                            <p className="w-[68px] h-[30px] text-[18px] font-bold text-white ">Product</p>
                            <p className="w-[70px] h-[28px] text-[16px] text-[#FFE492;]">Overview</p>
                            <p className="w-[50px] h-[28px] text-[16px]  text-white">Pricing</p>
                            <p className="w-[177px] h-[28px] text-[16px]  text-white">Custom stories</p>
                        </div>
                        <div className="w-[295px] h-[130px] gap-[16px]">
                            <p className="w-[91px] h-[30px] text-[18px] font-bold text-white ">Resources</p>
                            <p className="w-[33px] h-[28px] text-[16px] text-white">Blog</p>
                            <p className="w-[148px] h-[28px] text-[16px] text-white">Guide and Tutorials</p>
                            <p className="w-[130px] h-[28px] text-[16px] text-white">Help Center</p>
                        </div>
                        <div className="w-[295px] h-[130px] gap-[16px]">
                            <p className="w-[83px] h-[30px] text-[18px] font-bold text-white ">Company</p>
                            <p className="w-[66px] h-[28px] text-[16px] text-white">About</p>
                            <p className="w-[62px] h-[28px] text-[16px] text-white">Careers</p>
                            <p className="w-[99px] h-[28px] text-[16px] text-white">Media kit</p>
                        </div>


                        </div>
                        <div className="w-[1480px] h-[20px] mt-[60px] flex justify-center">
                            <div className="w-[169px] h-[20px] gap-[60px]">
                                <button className="w-[169px] h-[20px] text-[16px] text-white ">©2021 Whitepace LLC.</button>

                            </div>

                        </div>

                </div>

            </div>
        </div>
    )
}    
       