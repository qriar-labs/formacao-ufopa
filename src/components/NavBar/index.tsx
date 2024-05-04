import Link from "next/link"
import React from "react"

export default function NavBar() {
    return (
        <header>
            <nav className="fixed  top-0 z-50 h-[65px] w-full bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md" >
                <div className=" container m-auto flex h-full w-full max-w-7xl flex-row items-center justify-between px-10 ">
                    <Link href={"/#inicio"} className="flex h-auto w-auto cursor-pointer flex-row items-center ">
                        <p className="text-xl font-semibold text-white">QRIAR LABS</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}