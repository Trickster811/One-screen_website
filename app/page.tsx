"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [donationType, setDonationType] = useState(true); // true for one-off, false for monthly
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/coffee.jpg",
    "/images/architecture-signs.jpg",
    "/images/man-on-a-street.jpg",
    "/images/three-dogs.jpg",
  ];

  return (
    <main className="flex flex-col h-screen w-screen font-[Montserrat]">
      {/* Main body */}
      <div className="grow flex items-center justify-center gap-3 w-full p-4">
        {/* Right part */}
        <div className="relative flex flex-col justify-between h-full w-full rounded-2xl transition delay-150 duration-300 ease-in-out">
          <Image
            src={images[currentImage]}
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
          <div className="z-40 grid grid-cols-7 items-end w-full h-1/2">
            <div className="col-span-3 flex items-center gap-2 h-full px-2">
              <button
                className={`size-3 rounded-full ${
                  currentImage == 0
                    ? "bg-blue-400"
                    : "bg-white/20 backdrop-blue-md"
                } cursor-pointer`}
                onClick={() => setCurrentImage(0)}
              ></button>
              <button
                className={`size-3 rounded-full ${
                  currentImage == 1
                    ? "bg-blue-400"
                    : "bg-white/20 backdrop-blue-md"
                } cursor-pointer`}
                onClick={() => setCurrentImage(1)}
              ></button>
              <button
                className={`size-3 rounded-full ${
                  currentImage == 2
                    ? "bg-blue-400"
                    : "bg-white/20 backdrop-blue-md"
                } cursor-pointer`}
                onClick={() => setCurrentImage(2)}
              ></button>
              <button
                className={`size-3 rounded-full ${
                  currentImage == 3
                    ? "bg-blue-400"
                    : "bg-white/20 backdrop-blue-md"
                } cursor-pointer`}
                onClick={() => setCurrentImage(3)}
              ></button>
            </div>
            <div className="row-start-2 col-span-3 flex items-center h-full px-2 text-white text-sm">
              100% of your donation goes directly to students.
              <br />
              Transparent. Trackable. Tranformative.
            </div>
            <div className="relative row-start-3 col-span-3 flex items-center h-full px-2 rounded-tr-3xl bg-white">
              <div className="absolute z-40 -top-5 left-0 w-14 h-5 rounded-bl-3xl shadow-[-30px_0px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
              <div className="absolute -z-40 bottom-0 -right-14 w-14 h-5 rounded-bl-3xl shadow-[-30px_0px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
              Give Every Child A Chance To Stay In School.
            </div>
            <div className="relative row-start-4 row-span-2 col-span-5 flex items-center h-full px-2 rounded-tr-3xl bg-white">
              <div className="absolute -z-40 bottom-0 -right-14 w-14 h-8 rounded-bl-3xl shadow-[-30px_0px_0px_rgba(255,_255,_255,_255),_0_0px_0px_rgba(255,_255,_255,_255)]"></div>
              <p className="text-6xl tracking-[.04em] font-[MontserratL]">
                EDUCATION SHOULD <b className="font-[MontserratE]">NOT</b> BE A
                LUXURY
              </p>
            </div>
            <div className="row-span-3 row-start-1 col-start-4 col-span-2 flex flex-wrap items-end gap-1 mb-1.5 ml-1.5 text-xs text-white">
              <button className="flex items-center justify-center gap-2 w-fit h-fit p-2 bg-white/20 backdrop-blur-md cursor-pointer rounded-full hover:bg-white/30 transition-colors duration-200">
                <p className="text-xs">Track Donations</p>
              </button>
              <button className="flex items-center justify-center gap-2 w-fit h-fit p-2 bg-white/20 backdrop-blur-md cursor-pointer rounded-full hover:bg-white/30 transition-colors duration-200">
                <p className="text-xs">Secure Giving</p>
              </button>
              <button className="flex items-center justify-center gap-2 w-fit h-fit p-2 bg-white/20 backdrop-blur-md cursor-pointer rounded-full hover:bg-white/30 transition-colors duration-200">
                <p className="text-xs">Direct Sponsorship</p>
              </button>
              <button className="flex items-center justify-center gap-2 w-fit h-fit p-2 bg-white/20 backdrop-blur-md cursor-pointer rounded-full hover:bg-white/30 transition-colors duration-200">
                <p className="text-xs">Student Impact</p>
              </button>
            </div>
            <div className="row-span-5 col-start-6 col-span-2 flex flex-col justify-between h-full p-2 mr-1.5 mb-1.5 ml-2 bg-white/20 backdrop-blur-md rounded-3xl">
              <p className="text-4xl text-white">Featured Campaigns</p>
              <div className="flex flex-col items-center justify-center -space-y-16">
                <div className="-z-30 flex w-full h-fit rounded-xl bg-white opacity-15 scale-25">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-z-20 flex w-full h-fit rounded-xl bg-white opacity-20 scale-45">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-z-20 flex w-full h-fit rounded-xl bg-white opacity-25 scale-65">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-z-20 flex w-full h-fit rounded-xl bg-white opacity-30 scale-85">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-z-10 flex w-full h-fit rounded-xl bg-white opacity-60">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-0 flex w-full h-fit rounded-xl bg-white">
                  <div className="relative flex flex-col justify-end gap-y-1 w-1/4 h-full p-1">
                    <Image
                      src="/images/man-on-a-street.jpg"
                      alt="Students"
                      width={100000}
                      height={100000}
                      className="absolute -z-20 top-0 left-0 w-full h-full object-cover rounded-l-xl"
                    />
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-red-400 text-white text-[6px]">
                      2 days left
                    </div>
                    <div className="w-5/6 h-fit px-1 py-0.5 rounded-full bg-black/70 text-white text-[5px]">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-3/4 h-full p-2">
                    <div className="flex items-center justify-between text-[7px]">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <p className="uppercase">
                        Batundu Government High School
                      </p>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-[MontserratB]">
                        Help Amina Finish School
                      </p>
                      <p className="text-[8px] line-clamp-1 font-[MontserratL]">
                        Amina is a bright student who risks dropping
                      </p>
                      <div className="w-fit h-fit px-0.5 rounded-sm bg-blue-200 text-[8px] text-blue-400">
                        School Supplies
                      </div>
                    </div>
                    <div className="flex items-end gap-x-2">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between text-[6px]">
                          <p className="line-clamp-1 font-[MontserratB]">6500 FCFA raised</p>
                          <div className="w-2"></div>
                          <p className="line-clamp-1">20000 FCFA needed</p>
                        </div>
                        <div className="w-full h-1.5 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-center w-7 h-6 border border-blue-400 rounded-full text-blue-400 text-[8px] font-[MontserratB]">
                        38%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="flex justify-center -space-x-1">
            <div className="z-0 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">
              04
            </div>
            <div className="z-10 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">
              03
            </div>
            <div className="z-20 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">
              02
            </div>
            <div className="z-30 flex size-8 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white">
              01
            </div>
          </div>
          <p className="text-xs">
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
