import Image from "next/image";
import { useState, useEffect } from "react"; 
import Link from "next/link";
import logo from "./logo.png";

const links = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Resources",
        href: "/resources",
    },
    {
        label: "Assignments",
        href: "/assignments",
    }
]

export default function Navbar() {
    
    return(
        <>
            <div className="display: flex justify-between items-center m-4 ml-5 mr-5">
                <Link href="/" className="text-3xl cursor-pointer">
                    <Image 
                        src={logo}
                        alt="Logo"
                        width={170}
                        height={70}
                        className="cursor-pointer"
                    />
                </Link>
                
                <div className="display: flex gap-4">
                {links.map(({label,href}) => 
                    <Link key={label} href={href} className="active:text-[#2977f5]">
                        <p className=" text-lg cursor-pointer text-[#595959] hover:text-[#2977f5] ">{label}</p>
                    </Link>
                )}</div>
            </div>
        </>   
    );
}
