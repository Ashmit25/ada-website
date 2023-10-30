"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"] });

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
  const [showMobile, setShowMobile] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="flex flex-row justify-between p-8 items-center mx-3">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={185}
            height={74}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden sm:flex flex-row items-center justify-center gap-8">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={
                pathName == href
                  ? `text-[#2977f5] ${chivo.className} text-lg cursor-pointer hover:text-[#2977f5] `
                  : "text-lg cursor-pointer text-[#595959] hover:text-[#2977f5] "
              }
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="block sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="z-[3] h-6 w-6 inline-block lg:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setShowMobile(!showMobile);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {showMobile && (
            <div className="z-[3] bg-[#2977f5bf] text-white fixed top-0 left-0 right-0 h-screen flex flex-col items-center justify-center gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fixed top-[58.5px] right-11 z-50 h-6 w-6 inline-block lg:hidden cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => {
                  setShowMobile(!showMobile);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {links.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <p className=" text-lg cursor-pointer">{label}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
