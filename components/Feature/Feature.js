import React from "react";
import Image from "next/image";
import home from "../../public/images/home.png";
import Link from "next/link";

function Feature() {
  return (
    <div className="relative flex items-center w-full min-h-screen">
      <div className="inset-0 absolute w-full h-full z-[1] pattern opacity-20" />
      <div className="absolute inset-0 w-full  z-[2] h-full blur-2xl opacity-20">
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          src={home}
          quality={100}
        />
      </div>
      <div className="bg-gradient-to-b from-transparent to-black inset-0 z-[1] absolute" />
      <div className="relative max-w-[1440px] mx-auto z-10 grid h-full grid-cols-1 py-32 pb-0 lg:py-16 sm:gap-x-8 gap-y-10 lg:gap-y-40 pBox lg:grid-cols-2">
        <div className="relative z-20 flex flex-col justify-center text-center sm:text-left font-russo">
          <h1 className="text-white lg:text-7xl sm:text-5xl text-3xl sm:leading-[70px] leading-[32px] tracking-wider">
            Discover, Collect, Create and Sell{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-indigo-800">
              NFTs
            </span>
          </h1>
          <div className="flex justify-center mt-10 sm:justify-start sm:flex-row">
            <div className="px-5 sm:px-10 py-2.5 mr-3 sm:mr-6 lg:text-lg text-sm sm:text-base tracking-widest text-white transition duration-300 ease-in-out transform bg-gradient-to-br from-sky-500 to-indigo-800 hover:scale-105 rounded-lg">
            <Link href={"/explore"} >
              Explore
            </Link>
            </div>
          
            <a href="https://www.renstoken.io" target="_blank" rel="noreferrer" className="px-5 sm:px-10 whitespace-nowrap py-2.5 lg:text-lg text-sm sm:text-base tracking-widest text-white transition duration-300 ease-in-out transform bg-gradient-to-bl from-sky-500 to-indigo-800 hover:scale-105 rounded-lg">
              Start Collecting
            </a>
          </div>
        </div>
        <div className="relative z-20 flex items-center justify-center w-full h-full pb-[100px] pt-10 lg:pt-0 lg:pb-0">
          <div className="bg-blue-100/5 backdrop-blur-lg shadow-2xl shadow-blue-200/10 z-20 overflow-hidden flex border-2 border-white rounded-lg -mb-[144px] -mr-24 pers w-full max-w-[240px] lg:max-w-[300px] aspect-square">
            <div className="relative m-auto w-[90%] overflow-hidden a-1 aspect-square rounded-xl">
              <Image
                alt=""
                layout="fill"
                objectFit="contain"
                src={home}
                quality={100}
              />
            </div>
            <div className="absolute bottom-0 left-0 z-50 flex flex-col w-full p-3 mt-auto border-t-2 border-white bg-gradient-to-r from-blue-500/10 to-blue-800/10 backdrop-blur-[3px] font-russo">
              <h1 className="text-base font-medium text-white md:text-xl ">
                Bungalow House
              </h1>
              <p className="text-xs font-medium text-white md:text-base ">
                Coming Soon
              </p>
            </div>
          </div>
          <div className="bg-blue-100/5 backdrop-blur-lg shadow-2xl shadow-blue-200/10 z-50 overflow-hidden flex border-2 border-white rounded-lg m-pers w-full max-w-[240px] lg:max-w-[300px] aspect-square">
            <div className="relative m-auto w-[90%] overflow-hidden a-1 aspect-square rounded-xl">
              <Image
                alt=""
                layout="fill"
                objectFit="contain"
                src={home}
                quality={100}
              />
            </div>
            <div className="absolute text-right bottom-0 left-0 z-30 flex flex-col w-full p-3 mt-auto border-t-2 border-white bg-gradient-to-r from-blue-500/10 to-blue-800/10 backdrop-blur-[3px] font-russo">
              <h1 className="text-base font-medium text-white md:text-xl ">
                Villa
              </h1>
              <p className="text-xs font-medium text-white md:text-base ">
              Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
