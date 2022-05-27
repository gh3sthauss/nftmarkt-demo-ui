import React from "react";
import MockProductCard from "../../components/Card/MockProductCard";
import Footer from "../../components/Layout/Footer";
import circle1 from "../../public/images/home.webp";
import BannerCard from "../../components/BannerCard/BannerCard";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const card = [
  {
    id: 1,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "BSC",
    token: "ERC-231",
  },
  {
    id: 2,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "ETH",
    token: "ERC-231",
  },
  {
    id: 3,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "AVAX",
    token: "ERC-231",
  },
  {
    id: 4,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "BSC",
    token: "ERC-231",
  },
  {
    id: 5,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "BSC",
    token: "ERC-231",
  },
  {
    id: 6,
    img: circle1,
    tokenId: "231",
    contract: "0x37E3...f28e",
    blockchain: "BSC",
    token: "ERC-231",
  },
];

function Explore() {
  return (
    <div className="w-full">
      <div className="w-[70vw] left-1/2 -top-20 tranfrom -translate-y-1/2 -translate-x-1/2 opacity-80 h-[70vw] blur-[200px] filter rounded-full bg-gradient-to-b from-sky-800 to-indigo-800 absolute z-[2]" />
      <div className="inset-0 absolute w-full h-full z-[1] pattern opacity-30" />
      <div className="inset-0 absolute w-full bg-black h-full z-[3] opacity-60" />
      <div className="max-w-[1440px] mx-auto grid pt-24 grid-cols-1 sm:grid-cols-[1fr] gap-4 md:gap-8 pBox">
   
        <div className="relative z-10 grid w-full grid-cols-1 gap-8">
          <BannerCard />
          <div className="grid w-full lg:grid-cols-[1fr] gap-8">
          
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
              {card.map((item, index) => (
                <div key={index}>
                  <MockProductCard data={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="sticky z-[99] left-4 bottom-4 block min-w-[328px] w-[calc(100vw-32px)] sm:hidden">
          </div>
          {/* <div className="flex items-center justify-center w-full lg:w-[calc(100%-352px)] space-x-3 text-white">
            <button className="text-white rounded-full right-2 top-1/2">
              <FaChevronLeft size={18} />
            </button>
            <button className="w-[38px] h-[38px] hover:bg-opacity-20 hover:border-opacity-90 transition-all text-white font-semibold border border-indigo-700 rounded-xl font-russo border-opacity-30 bg-indigo-500 bg-opacity-10">
              1
            </button>
            <button className="w-[38px] h-[38px] hover:bg-opacity-20 hover:border-opacity-90 transition-all text-white font-semibold border border-indigo-700 rounded-xl font-russo border-opacity-30 bg-indigo-500 bg-opacity-10">
              2
            </button>
            <button className="sm:block hidden w-[38px] h-[38px] hover:bg-opacity-20 hover:border-opacity-90 transition-all text-white font-semibold border border-indigo-700 rounded-xl font-russo border-opacity-30 bg-indigo-500 bg-opacity-10">
              3
            </button>
            <div className="w-min flex items-end h-[38px] font-medium font-russo tracking-widest">
              ...
            </div>
            <button className="sm:block hidden w-[38px] h-[38px] hover:bg-opacity-20 hover:border-opacity-90 transition-all text-white font-semibold border border-indigo-700 rounded-xl font-russo border-opacity-30 bg-indigo-500 bg-opacity-10">
              8
            </button>
            <button className="w-[38px] h-[38px] hover:bg-opacity-20 hover:border-opacity-90 transition-all text-white font-semibold border border-indigo-700 rounded-xl font-russo border-opacity-30 bg-indigo-500 bg-opacity-10">
              9
            </button>
            <button className="text-white rounded-full right-2 top-1/2">
              <FaChevronRight size={18} />
            </button>
          </div> */}
        </div>
      </div>
      <div className="mt-40 pBox bg-black max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Explore;
