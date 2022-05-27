import React from "react";
import Image from "next/image";

function Card({ data, page }) {
  return (
    <div className="relative w-full group">
      <div className="animate-pulse">
        <div className="absolute w-full h-full transition duration-1000 rounded-3xl animate-tilt group-hover:duration-200 bg-gradient-to-r from-sky-500 to-indigo-800 blur-md"></div>
      </div>
      <div
        className={`relative flex flex-col items-center justify-center w-full h-full ${
          page === "explore" ? "p-2" : "p-4"
        } text-white bg-black rounded-3xl`}
      >
        <div
          className={`flex items-center w-full justify-between  ${
            page === "explore" ? "py-1 px-4" : "px-4 py-2"
          } rounded-xl bg-gradient-to-r from-sky-500 to-indigo-800`}
        >
          <div className="flex items-center w-full mr-4">
            {data.img && (
              <div className="relative mr-3 w-full max-w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={data.img}
                  quality={100}
                />
              </div>
            )}
            <p
              className={` ${
                page === "explore" ? "text-xs" : "sm:text-xl text-base"
              }`}
            >
              {data.title}
            </p>
          </div>
          <span className="sm:text-xl text-base">{data.value}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
