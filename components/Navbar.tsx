import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
  },
];

export default function Navbar() {
  return (
    <>
      <div className="hidden sm:flex flex-row justify-between p-8 items-center mx-3">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={185}
            height={74}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex flex-row items-center justify-center gap-8">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className="active:text-[#2977f5]">
              <p className=" text-lg cursor-pointer text-[#595959] hover:text-[#2977f5] ">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
