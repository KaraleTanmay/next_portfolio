import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="fixed top-0 z-10 w-full h-[12vh] flex justify-between items-center px-2 md:px-20 md:bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent">
            <Link href={"/"} className="flex items-center md:gap-4 gap-2 text-[20px] md:text-[40px] font-bold">
                <div>
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-[40px] md:w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-yellow-400">WeirdWolf</div>
            </Link>
            <div className="text-white text-[25px] md:text-[30px] flex gap-2 md:gap-4 items-center px-4 md:px-0">
                <Link href={"https://www.instagram.com/_callme_freak_/"} target="_blank">
                    <FaInstagramSquare />
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/tanmay-karale-73b09422a/"}
                    target="_blank"
                >
                    <FaLinkedin />
                </Link>
                <Link
                    href={"https://www.github.com/KaraleTanmay"}
                    target="_blank"
                >
                    <IoLogoGithub />
                </Link>
            </div>
        </div>
    );
}
