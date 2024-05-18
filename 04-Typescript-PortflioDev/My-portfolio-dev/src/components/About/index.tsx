"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { useStateContext } from "@/pages/providers";

export default function About() {
  const { refCallback }: any = useStateContext();
  return (
    <>
      <section
        id="sobre"
        className=" z-20 mx-auto flex w-full flex-col items-center justify-center pb-10 md:px-2"
        ref={refCallback}
      >
        <div className="container flex h-full w-full flex-col items-center justify-center gap-8 rounded-lg bg-gray-950/50 px-2 py-10 pb-9 md:justify-between lg:flex-row lg:py-16 xl:pr-20 ">
          <Image
            src="/avatarpc.jpeg"
            alt="avatar felipe lacerda"
            height={500}
            width={500}
            className="mx-auto w-1/2 max-w-[200px] rounded-full bg-gray-950 md:max-w-[300px] lg:max-w-[350px]"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-clip bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text  text-base font-semibold text-transparent">
              Sobre Mim
            </h2>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Objetivos Futuros
            </h3>
            <p className="pb-6 text-base text-white lg:text-lg">
              Meu entusiasmo pelo desenvolvimento web me leva a buscar
              conhecimentos mais profundos. No futuro, pretendo expandir minhas
              habilidades para o desenvolvimento de back-end, especialmente com
              Node.js. Estou ansioso para aprender mais sobre como criar e dar
              vida a projetos ainda mais ambiciosos.
            </p>
            <motion.div
              variants={slideInFromLeft(1)}
              className="flex w-full gap-5"
            >
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
                className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white  transition-all duration-100 hover:scale-105"
              >
                LinkedIn
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1PwyWyf-6Bm5pNX7kZvEAnL24olWdGYnW/view?usp=sharing"
                className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
              >
                Currículo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
