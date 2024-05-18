"use client";
import { dataMenu } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { useStateContext } from "@/pages/providers";
import { diasAteOFimDoAno } from "@/utils/exemple01";
export default function DesktopLinks() {
  const [selectedTab, setSelectedTab] = useState(dataMenu[0]);
  const pathname = usePathname();

  const { visibleSection }: any = useStateContext();
  console.log(visibleSection)

/*   useEffect(() => {
    if (visibleSection === "inicio") setSelectedTab(dataMenu[0]);
    if (visibleSection === "habilidades") setSelectedTab(dataMenu[1]);
    if (visibleSection === "projetos") setSelectedTab(dataMenu[2]);
    if (visibleSection === "sobre") setSelectedTab(dataMenu[3]);
  }, [visibleSection]); */
  console.log(selectedTab)

/*   useEffect(() => {
    console.log(pathname)
    if (pathname !== "/") setSelectedTab(dataMenu[2]);
  }, [pathname]); */


//Este código irá imprimir o nome e o link de cada item do menu.  
/* 
  let item = dataMenu.find((item) => item.name === "Projetos");
  console.log(item);
//Este código irá encontrar e imprimir o item do menu com o nome “Projetos”.

  dataMenu.push({ name: "Novo Item", href: "#novoitem" });
  console.log(dataMenu);
// Este código irá adicionar um novo item ao menu e imprimir o menu atualizado.

  dataMenu = dataMenu.filter((item) => item.name !== "Sobre");
  console.log(dataMenu);
 // Este código irá remover o item “Sobre” do menu e imprimir o menu atualizado.

 let dataMenuMapped = dataMenu.map((item, index) => {
  return { id: index, name: item.name, href: item.href };
});

console.log(dataMenuMapped);
 */

  useEffect( () => {
    dataMenu.forEach((item) => {
      console.log(`Nome: ${item.name}, Link: ${item.href}`);
    });

    let item = dataMenu.find((item) => item.name === "Projetos");
    console.log(item);
  })

  return (
    <>
      <div className="hidden justify-between gap-4  rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2 md:flex">
        {dataMenu.map((el, index) => (
          //mostrar o exemplo usando o react.fragment, div e tag vazia
          <Fragment key={index}>
            <Link
              href={`${pathname !== "/" ? "/" : ""}${el.href}`}
              className="relative flex h-auto w-auto cursor-pointer flex-row items-center "
              onClick={() => {
                setSelectedTab(el);
              }}
            >
              <p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300">
                {el.name}
              </p>

              {el === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Link>
          </Fragment>
        ))}
      </div>
    </>
  );
}
