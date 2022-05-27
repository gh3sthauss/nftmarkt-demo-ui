import React from "react";
import Image from "next/image";

function InformationCard({ data }) {
  return (
    <>
      <div className="relative flex flex-col w-full pb-4 mx-auto overflow-hidden transition-transform transform bg-indigo-500 border border-indigo-700 select-none hover:scale-105 group rounded-xl font-russo border-opacity-30 bg-opacity-10">
        <div className="relative w-full overflow-hidden aspect-square">
          <Image
            alt=""
            layout="fill"
            objectFit="contain"
            src={data.img}
            quality={100}
            className="blur-sm"
          />
        </div>
        <p className="flex items-center justify-center px-4 pt-4 text-xl text-white border-t-2 border-indigo-700 border-opacity-30">
          {data.title}
        </p>
        <div className="flex flex-col px-4 mt-2">
          <div className="flex justify-between text-xl">
            <p className="text-indigo-500 ">{data.etcValue} ETC</p>
            <p className="text-white">{data.usdValue} USD</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationCard;
