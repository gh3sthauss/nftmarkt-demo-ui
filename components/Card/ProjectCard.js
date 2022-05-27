import Image from "next/image";
import React from "react";
import home from "../../public/images/home.png";

function ProjectCard() {
  return (
    <div className="h-[850px] lg:flex flex-col hidden relative w-full p-4 bg-indigo-500 border border-indigo-700 font-russo rounded-2xl bg-opacity-10 border-opacity-30 ">
      <div className="relative w-full aspect-square">
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          src={home}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="relative w-12 h-12 mr-3 overflow-hidden rounded-full">
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            src={home}
            quality={100}
          />
        </div>
        <div>
          <p className="text-white text-xl">NFT PROJECT NAME</p>
          <p className="text-opacity-50 text-white text-base">Artist Name</p>
        </div>
      </div>
      <p className="text-white text-opacity-80 text-sm mt-4 text-center">
        A non-interchangeable unit of data stored on a blockchain, a form of
        digital ledger, that can be sold and traded. Types of NFT data units.a
        non-interchangeable unit of data stored on a blockchain, a form of
        digital ledger, that can be sold and traded. Types of NFT data units.
      </p>
      <div className="flex flex-col mt-8">
        <p className="text-xs text-white">Current Bid</p>
        <div className="flex justify-between text-xl mt-3">
          <p className="text-indigo-500">1.80 ETC</p>
          <p className="text-white">7.987 USD</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2 w-full h-[100px] mt-8">
        <div className="bg-gray-200 hover:bg-indigo-500 bg-opacity-20 rounded-2xl text-white text-opacity-80 hover:text-opacity-100 text-2xl flex items-center justify-center">
          12 H
        </div>
        <div className="bg-gray-200 hover:bg-indigo-500 bg-opacity-20 rounded-2xl text-white text-opacity-80 hover:text-opacity-100 text-2xl flex items-center justify-center">
          08 M
        </div>
        <div className="bg-gray-200 hover:bg-indigo-500 bg-opacity-20 rounded-2xl text-white text-opacity-80 hover:text-opacity-100 text-2xl flex items-center justify-center">
          01 S
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <button className="w-full mr-4 rounded-2xl px-2 py-3 text-white bg-indigo-500">
          View All
        </button>
        <button className="w-full px-2 rounded-2xl py-3 text-white border-indigo-500 border">
          Place a Bit
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
