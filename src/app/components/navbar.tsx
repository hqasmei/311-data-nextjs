"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoMdMenu, IoMdClose } from "react-icons/io";

import { Oswald, Roboto } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className={`${roboto.className}  mx-auto w-full bg-primaryDarkMain text-white `}
    >
      <div className="mx-4 justify-between md:flex md:h-16 md:flex-row  md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link
              href="/map"
              className={`${oswald.className} text-4xl font-semibold tracking-widest`}
            >
              311DATA
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose size={30} color="white" />
                ) : (
                  <IoMdMenu size={30} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`mx-4 mt-8 flex-1 justify-self-center pb-3 text-right text-sm md:mx-0 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-6 md:flex md:space-y-0">
              <Link
                href="/map"
                className={
                  pathname == "/map"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                Map
              </Link>
              <Link
                href="/dashboard"
                className={
                  pathname == "/dashboard"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                Dashboard
              </Link>
              <Link
                href="/faq"
                className={
                  pathname == "/faq"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className={
                  pathname == "/about"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                About
              </Link>
              <Link
                href="/research"
                className={
                  pathname == "/research"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                Research
              </Link>
              <Link
                href="/privacy"
                className={
                  pathname == "/privacy"
                    ? "block pb-1 text-lg font-bold md:border-b md:border-primaryFocus md:px-6 md:text-sm md:font-normal lg:inline-block"
                    : "block pb-1 md:px-6 lg:inline-block"
                }
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className={
                  pathname == "/contact"
                    ? "block text-lg font-bold md:border-b md:border-primaryFocus md:px-6 pb-1 md:text-sm md:font-normal lg:inline-block"
                    : "block md:px-6 pb-1 lg:inline-block"
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
