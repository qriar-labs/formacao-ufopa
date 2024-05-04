import Link from "next/link";
import Image from "next/image";
import { RiSparkling2Fill } from "react-icons/ri";

export default function HeroContent() {
    return (
        <section className="z-20 flex min-h-screen w-full items-center justify-center">

            <div className="container z-20 mx-auto  flex h-full w-full max-w-7xl flex-col items-center justify-center px-5 pt-20 max-[375px]:max-w-[320px] max-[320px]:mt-0 lg:flex-row lg:pt-0">

                <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-5 text-start lg:items-start">

                    <div className="welcome-box border border-[#7042f88b] px-4 py-4 opacity-90">
                        <RiSparkling2Fill className="mr-1 h-5 w-5 text-[#b49bff]" />
                        <h1 className="welcome-text text-[13px]">Desenvolvedor Front-end</h1>

                    </div>

                    <div className="font-bold text-white lg:max-w-[600px]">

                        <span className="flex flex-col ">
                            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-center text-4xl text-transparent lg:text-left lg:text-6xl">QRIAR LABS</span>
                            <span className="text-center text-3xl lg:text-left lg:text-4xl">Desenvolvedor front-end</span>
                        </span>

                    </div>

                    <p className=" max-w-[600px]  text-center text-base text-gray-300 md:text-lg lg:max-w-[450px] lg:text-left xl:max-w-[600px]">
                        A minha jornada no mundo do desenvolvimento web começou com o{" "}
                        <span className="font-bold">React</span> e o{" "}
                        <span className="font-bold">Next.js</span> e desde então tenho
                        trabalhado para aprimorar minhas habilidades e criar sites e
                        aplicativos envolventes.
                    </p>

                    <div className="flex w-full  items-center justify-center gap-5 lg:justify-start ">
                        <Link href={"www.linkedin.com/in/wagsampaioner-viana--bb80ab207"} className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105">LinkedIn</Link>
                        <Link href={"https://github.com/qriar-labs/"} className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105">GitHUb</Link>
                    </div>

                </div>

                <div className="flex h-full w-full items-center justify-center">
                    <Image src={"/img.svg"} alt={"Hero Imagem do next"} width={650} height={650}></Image>
                </div>
            </div>
        </section>
    )
}