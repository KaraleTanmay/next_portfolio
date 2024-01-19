import Image from "next/image";
import Link from "next/link";
import Button from "./Button";



export default function Card(props) {

    const project = props.project
    return (
        <div className="w-full glass rounded-lg bg-red-500 flex flex-col items-center justify-evenly p-4 gap-2 md:p-8 md:gap-8 text-white">
            <div className="min-h-[230px] flex items-center">
                <Image src={project.profile} width={1000} height={300} alt={project.name} className="w-full rounded-lg border-[2px] border-[rgba(255,255,255,0.3)]" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-[25px] font-semibold text-white">{project.name}</h1>
                <h2 className="text-lg">{project.techStack.join(", ")}</h2>
                <p className="text-justify">{project.description}</p>
                <div className="flex w-full justify-between px-8 items-center">

                    <Button link={project.link} text={"Live"} />
                    <Button link={project.githubRepo} text={"Github"} />
                    <Button link={project.linkedin} text={"See More"} />
                </div>

            </div>

        </div>
    )
}
