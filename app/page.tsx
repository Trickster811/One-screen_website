"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [donationType, setDonationType] = useState(true); // true for one-off, false for monthly
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <main className="flex flex-col h-screen w-screen font-[Montserrat]">
      {/* Main body */}
      <div className="grow flex items-center justify-center gap-3 w-full p-4">
        {/* Right part */}
        <div className="relative flex h-full w-full rounded-2xl">
          <Image
            src="/images/coffee.jpg"
            alt="Students"
            width={100000}
            height={100000}
            className="absolute w-full h-full object-cover rounded-2xl"
          />
          <div className="z-40 flex items-center justify-between w-full h-fit">
            <div className="relative flex gap-x-2 p-3 rounded-br-3xl bg-white">
              <div className="w-8 h-auto bg-orange-400"></div>
              <div className="flex flex-col justify-center gap-y-0.5">
                <div className="flex items-center gap-x-0.5 text-xs">
                  <p className="font-[MontserratB]">iCLAN</p>
                  <div className="px-0.5 rounded-sm bg-blue-400 text-white">
                    HELEP
                  </div>
                </div>
                <p className="text-[4.4px]">
                  Empowering Education Through Giving
                </p>
              </div>
              <div className="absolute -z-40 -bottom-14 left-0 w-8 h-14 rounded-tl-3xl shadow-[0px_-30px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
              <div className="absolute -z-40 top-0 -right-14 w-14 h-6 rounded-tl-3xl shadow-[-30px_0px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
            </div>
            <div className="flex text-xs">
              <button
                className={`flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 ${
                  selectedMenu == 0
                    ? "bg-white"
                    : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                } cursor-pointer rounded-full transition-colors duration-200 ${
                  selectedMenu == 0 ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setSelectedMenu(0)}
              >
                <div
                  className={`${
                    selectedMenu == 0 ? "block" : "hidden"
                  } w-1.5 h-1.5 rounded-full bg-blue-400`}
                ></div>
                <p className={``}>Home</p>
              </button>
              <button
                className={`flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 ${
                  selectedMenu == 1
                    ? "bg-white"
                    : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                } cursor-pointer rounded-full transition-colors duration-200 ${
                  selectedMenu == 1 ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setSelectedMenu(1)}
              >
                <div
                  className={`${
                    selectedMenu == 1 ? "block" : "hidden"
                  } w-1.5 h-1.5 rounded-full bg-blue-400`}
                ></div>
                <p className={``}>How It Works</p>
              </button>
              <button
                className={`flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 ${
                  selectedMenu == 2
                    ? "bg-white"
                    : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                } cursor-pointer rounded-full transition-colors duration-200 ${
                  selectedMenu == 2 ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setSelectedMenu(2)}
              >
                <div
                  className={`${
                    selectedMenu == 2 ? "block" : "hidden"
                  } w-1.5 h-1.5 rounded-full bg-blue-400`}
                ></div>
                <p className={``}>Donate Items</p>
              </button>
              <button
                className={`flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 ${
                  selectedMenu == 3
                    ? "bg-white"
                    : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                } cursor-pointer rounded-full transition-colors duration-200 ${
                  selectedMenu == 3 ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setSelectedMenu(3)}
              >
                <div
                  className={`${
                    selectedMenu == 3 ? "block" : "hidden"
                  } w-1.5 h-1.5 rounded-full bg-blue-400`}
                ></div>
                <p className={``}>Contact Us</p>
              </button>
              <button
                className={`flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 ${
                  selectedMenu == 4
                    ? "bg-white"
                    : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                } cursor-pointer rounded-full transition-colors duration-200 ${
                  selectedMenu == 4 ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setSelectedMenu(4)}
              >
                <div
                  className={`${
                    selectedMenu == 4 ? "block" : "hidden"
                  } w-1.5 h-1.5 rounded-full bg-blue-400`}
                ></div>
                <p className={``}>En</p>
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 w-fit h-fit p-3 mr-1 bg-white/20 backdrop-blur-md cursor-pointer rounded-full hover:bg-white/30 transition-colors duration-200 text-white">
              <div className="w-3 h-3 bg-white"></div>
              <p className="text-xs">Donation Basket: (0)</p>
            </button>
          </div>
        </div>
        {/* Left part */}
        <div className="flex flex-col gap-y-3 w-2/9 h-full">
          <div className="flex gap-x-2 w-full p-1 rounded-xl bg-blue-100">
            <Link
              href={"#"}
              className="flex items-center justify-center gap-x-2 w-full p-1.5 border border-blue-400 rounded-xl bg-blue-100 text-blue-400 text-sm hover:bg-blue-200 transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-center gap-x-2 w-full p-1.5 border border-blue-400 rounded-xl bg-blue-400 text-white text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>

          <div className="relative h-full rounded-t-xl rounded-bl-xl rounded-br-4xl">
            <div className="absolute z-50 flex flex-col justify-end gap-y-3 p-3 h-full w-full">
              <p className="text-white text-xs font-[MontserratM]">
                Explore how your support has changedlives -- real students, real
                dreams, real futures made possible.
              </p>
              <div className="flex gap-x-3">
                <div className="z-0 flex size-7 items-center justify-center rounded-full bg-white/30">
                  -
                </div>
                <div className="z-10 flex size-7 items-center justify-center rounded-full bg-white/30">
                  -
                </div>
                <div className="z-20 flex size-7 items-center justify-center rounded-full bg-white/30">
                  -
                </div>
                <div className="z-30 flex size-7 items-center justify-center rounded-full bg-white/30">
                  -
                </div>
              </div>
            </div>
            <Image
              src="/images/cat.jpg"
              alt="Students"
              width={100000}
              height={100000}
              className="absolute w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 right-0 flex items-end">
              <div className="w-12 h-6 rounded-br-4xl shadow-[28px_0px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
              <div className="z-10 pt-2 pl-2 border-t-4 border-l-4 border-t-white border-l-white rounded-tl-4xl bg-white">
                <button
                  className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer transition-colors duration-200"
                  onClick={() => {}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-12 right-0 w-6 h-12 rounded-br-4xl shadow-[0px_20px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 p-3 rounded-xl bg-blue-400">
            <p className="text-3xl text-white font-[MontserratM]">
              Support a Student Today
            </p>
            <div className="flex border-b border-white">
              <button
                className={`w-full p-2 ${
                  donationType
                    ? "border-b-2 border-b-white"
                    : " border-b-2 border-b-transparent"
                } text-xs text-white ${
                  donationType ? "font-bold" : "font-normal"
                } hover:bg-white/10 transition-colors duration-200`}
                onClick={() => setDonationType(true)}
              >
                One Off Donation
              </button>
              <button
                className={`w-full p-2 ${
                  !donationType
                    ? "border-b-2 border-b-white"
                    : " border-b-2 border-b-transparent"
                } text-xs text-white ${
                  !donationType ? "font-bold" : "font-normal"
                } hover:bg-white/10 transition-colors duration-200`}
                onClick={() => setDonationType(false)}
              >
                Monthly Donation
              </button>
            </div>
            <input
              type="number"
              name="amount"
              id="amount"
              className="p-3 border focus:outline focus:outline-white rounded-xl bg-white/10 text-white"
              placeholder="0.00 XAF"
            />
            <Link
              href={"#"}
              className="flex items-center justify-center gap-x-2 w-full p-3 border border-white rounded-xl bg-white text-blue-400 text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex items-center justify-between py-4 mx-4 mb-4 border-y border-y-black">
        {/* Right side */}
        <div className="flex items-center gap-x-4">
          <div className="flex justify-center -space-x-1 font-mono text-sm leading-6 font-bold text-white">
            <div className="z-0 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">
              04
            </div>
            <div className="z-10 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">
              03
            </div>
            <div className="z-20 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">
              02
            </div>
            <div className="z-30 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">
              01
            </div>
          </div>
          <p className="text-sm">
            500,000 Students Smile Bacause of Your Kindness
          </p>
        </div>
        {/* Left side */}
        <Link
          href={"#"}
          className="flex items-center justify-center gap-x-2 p-2 border border-blue-400 rounded-xl bg-blue-100 text-blue-400 text-sm hover:bg-blue-200 transition-colors duration-200"
        >
          See How It Works
        </Link>
      </footer>
    </main>
  );
}
