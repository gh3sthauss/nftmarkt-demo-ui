import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import home from "../../public/images/home.webp";
import { MdClose, MdMenu } from "react-icons/md";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Router } from "next/router";
import logo from "../../assets/logo.png";
import {ConnectWallet} from '../connectWallet';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pos = useScrollPosition();
  const ref = useRef();
  useOnClickOutside(ref, () => setMenu(false));
  const ref2 = useRef();
  useOnClickOutside(ref2, () => setOpen(false));

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setMenu(false);
      setOpen(false);
    });
  }, []);

  return (
    <div className={`fixed z-50 w-full`}>
      <div
        className={`w-full  transition-colors ${
          pos > 0
            ? "bg-black bg-opacity-70 backdrop-blur-2xl"
            : "bg-transparent"
        } `}
      >
        <div className={`w-full py-4 max-w-[1440px] mx-auto pBox`}>
          <div className="relative grid grid-cols-2 lg:grid-cols-[100px,1fr,360px] font-russo">
            <div className="relative w-full max-w-[150px] text-2xl flex items-center text-white font-russo cursor-pointer">
              <Link href="/"><Image src={logo}></Image></Link>
            </div>
            <input
              id="search"
              name="search"
              className="w-full hidden lg:flex text-sm text-gray-400 px-4 items-center mx-auto py-2 bg-brand-blue border border-indigo-900 max-w-[460px] font-russo rounded-2xl"
              placeholder="Search everything..."
            />
            <div className="flex items-center justify-end">
              <div className="items-center hidden mr-8 text-sm text-white lg:flex font-russo">
                <Link href="/">
                  <a className="mr-8">HOME</a>
                </Link>
                <Link href="/explore">
                  <a className="">EXPLORE</a>
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <ConnectWallet></ConnectWallet>
                <div className="items-center justify-center hidden">
                  <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full">
                    <Image
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      src={home}
                      quality={100}
                    />
                  </div>
                  <div
                    ref={ref2}
                    onClick={() => setOpen(!open)}
                    className="relative flex items-center text-sm text-white cursor-pointer"
                  >
                    <p className="mr-3 whitespace-nowrap">Hi , Xxx</p>
                    <FaChevronDown />
                    {open && (
                      <div className="absolute animate-enterActionBox z-40 w-full bg-brand-blue border border-indigo-900 font-russo text-xs -bottom-[70px] rounded-xl p-2">
                        <button className="mb-2">Settings</button>
                        <button>Logout</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {menu ? (
                <button
                  onClick={() => setMenu(false)}
                  className="flex ml-4 text-3xl text-white lg:hidden"
                >
                  <MdClose />
                </button>
              ) : (
                <button
                  onClick={() => setMenu(true)}
                  className="flex ml-4 text-3xl text-white lg:hidden"
                >
                  <MdMenu />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div
          ref={ref}
          className="absolute animate-enterActionBox w-[calc(100%-32px)] left-4 rounded-lg backdrop-blur-2xl bg-opacity-5 border border-white flex flex-col px-6 py-6 items-center justify-center lg:hidden bg-white z-[30] top-[82px]"
        >
          <div className="flex items-center w-full mb-5 text-sm text-white font-russo justify-evenly">
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="explore">
              <a className="">EXPLORE</a>
            </Link>
          </div>
          <input
            id="search"
            name="search"
            className="w-full flex lg:hidden text-sm text-gray-400 px-4 items-center mx-auto py-3 bg-brand-blue border border-indigo-900 max-w-[460px] font-russo rounded-2xl"
            placeholder="Search everything..."
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
