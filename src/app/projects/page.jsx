import Card from "@/components/Card";
import { Projects as projects } from "@/constants/social";

export default function Projects() {



    return (
        <div className="w-screen h-screen bg-night-moon bg-cover bg-center flex items-center px-4 md:px-0 overflow-y-scroll">


            <div className="w-[90vw] md:w-[70vw] m-auto mt-[12vh] md:mt-[15vh] flex justify-between flex-wrap gap-y-20 pb-[5vh] md:pb-[10vh]">

                {
                    projects.map((project, index) => {
                        return (
                            <div className="w-full md:w-[80%] md:m-auto lg:w-[45%]" key={index}>
                                <Card project={project} />
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}
