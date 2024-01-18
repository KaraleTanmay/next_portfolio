import { HomeNavs } from "@/constants/social";
import Link from "next/link";

const description = "Hello, I'm Tanmay Karale, a passionate web developer. I bring enthusiasm and a smart-working approach to every project. Open to collaborating professionally, I aim to create exceptional web experiences. Ready to impress recruiters with my dedication and expertise."

export default function Home() {
    return (
        <main className="w-screen h-screen relative text-white">
            <div className="w-full h-full bg-blood-moon-center md:bg-blood-moon bg-cover bg-center flex items-center px-4 md:px-0">

                {/* desktop view  */}
                <div className="hidden md:flex flex-col p-8 md:ml-24 max-w-[600px] gap-2">
                    <div>

                        <h1 className="text-[60px]">
                            Weaving Visions
                        </h1>
                        <h1 className="text-[60px] ">
                            into <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-yellow-400 font-bold">Web Wonders</span>
                        </h1>
                    </div>
                    <p className="mt-8 max-w-[600px]">
                        {description}
                    </p>

                    <div className="flex gap-10  items-center mt-5 font-semibold text-[20px]">
                        {
                            HomeNavs.map((ele, i) => {
                                return (
                                    <Link key={i} href={ele.path} className=" text-[20px] px-4 py-1 border-[1px] border-white  rounded-lg hover:bg-gradient-to-b from-red-800 to-orange-500">
                                        {ele.name}
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>

                {/* mobile view */}
                <div className="md:hidden w-full flex flex-col items-center px-4 gap-10 bg-[rgba(0,0,0,0.7)] py-8 rounded-lg">
                    <div>
                        <h1 className="text-[30px] text-center">
                            Weaving Visions into
                        </h1>
                        <h1 className="text-center text-[50px] text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-yellow-400 font-bold">
                            Web Wonders
                        </h1>
                        <p className="mt-8  text-justify px-6 py-2 ">
                            {
                                description
                            }
                        </p>
                    </div>


                    <div className="flex gap-4  items-center mt-5 text-[20px]">
                        {
                            HomeNavs.map((ele, i) => {
                                return (
                                    <Link key={i} href={ele.path} className=" text-[20px] px-4 py-1 border-[1px] border-white rounded-lg hover:bg-gradient-to-b from-red-800 to-orange-500">
                                        {ele.name}
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>


            </div>
        </main>
    );
}
