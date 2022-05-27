import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "../../public/images/home.png";
import { RiHeartLine } from "react-icons/ri";

function ProductCard({ data }) {
  return (
    <>
      <Link href={`/explore/${data.id}`}>
        <a>
          <div className="relative flex flex-col w-full p-4 mx-auto border border-indigo-700 group rounded-xl font-russo border-opacity-30 hover:bg-indigo-500 hover:bg-opacity-10">
            <div className="relative w-full overflow-hidden aspect-square rounded-xl">
              <div className="absolute z-10 p-2 text-xs text-white bg-gray-200 rounded-lg top-2 left-2 bg-opacity-20">
                12h : 03m : 02s
              </div>
              <div className="absolute z-10 p-2 text-white bg-gray-200 rounded-lg cursor-pointer top-2 right-2 text-md bg-opacity-20">
                <RiHeartLine />
              </div>
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={data.img}
                quality={100}
              />
            </div>
            <div className="flex items-center justify-start mt-6">
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
                <p className="text-base text-white sm:text-xl">
                  NFT PROJECT NAME
                </p>
                <p className="text-sm text-white text-opacity-50 sm:text-base">
                  Artist Name
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-sm text-white">Current Bid</p>
              <div className="flex justify-between mt-3 text-xl">
                <p className="text-indigo-500 group-hover:text-green-500">
                  1.80 ETC
                </p>
                <p className="text-white">7.987 USD</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default ProductCard;
