import Image from "next/image";
import React from "react";
import Card from "../../../components/Card/Card";
import { SiBitcoincash } from "react-icons/si";
import Tab from "../../../components/Tab/Tab";
import Footer from "../../../components/Layout/Footer";
import circle1 from "../../../public/images/home.webp";
import { RiHeartLine } from "react-icons/ri";

const card = [
  { id: 1, title: "RENS", value: "???.???.??" },
  { id: 2, title: "BUSD", value: "?.???.??" },
 
];
function Detail() {
  return (
    <div className="w-full pt-24">
      <div className="w-[70vw] left-1/2 -top-20 tranfrom -translate-y-1/2 -translate-x-1/2 opacity-80 h-[70vw] blur-[200px] filter rounded-full bg-gradient-to-b from-sky-800 to-indigo-800 absolute z-[2]" />
      <div className="inset-0 absolute w-full h-full z-[1] pattern opacity-50" />
      <div className="inset-0 absolute w-full bg-gradient-to-b from-[#00000077] to-black h-full z-[3]" />

      <div className="relative max-w-[1440px] mx-auto z-10 grid w-full grid-cols-1 gap-8 py-8 pBox lg:grid-cols-2 ">
        <div className="w-full">
          <div className="relative w-full mb-6 aspect-square rounded-xl overflow-hidden">
            <div className="absolute  z-10 top-2 left-2 bg-gray-200 bg-opacity-20 rounded-lg p-2 text-white text-xs">
              12h : 03m : 02s
            </div>
            <div className="absolute cursor-pointer z-10 top-2 right-2 text-md bg-gray-200 text-white bg-opacity-20 rounded-lg p-2">
              <RiHeartLine />
            </div>
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src={circle1}
              quality={100}
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 font-russo">
            {card.map((item, index) => (
              <div key={index} className="mt-5">
                <Card data={item} page={"explore"} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="p-4 mb-8 bg-indigo-500 border border-indigo-700 font-russo rounded-2xl bg-opacity-10 border-opacity-30">
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <div className="flex items-center">
                <p className="mr-2 text-white text-opacity-50">
                  RENS NFT Stake
                </p>
                <p className="text-white">#234</p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <p className="mr-2 text-white text-opacity-50">End Date</p>
                <p className="text-white">12.12.2022</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8 justify-evenly sm:flex-row">
            
            </div>
          </div>
          <Tab />
          <div className="grid grid-cols-2 gap-8 p-4 mt-8 text-sm bg-indigo-500 border border-indigo-700 sm:text-base font-russo rounded-2xl bg-opacity-10 border-opacity-30">
            <div className="text-white text-opacity-50">
              <p>Token ID</p>
              <p>Contract</p>
              <p>Blockchain</p>
              <p>Token Standardı</p>
            </div>
            <div className="text-right text-white">
              <p>285</p>
              <p>0x37E3...f28e</p>
              <p>BSC</p>
              <p>ERC-1155</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-black max-w-[1440px] mx-auto pBox">
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
