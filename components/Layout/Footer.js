import React from "react";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="relative z-20 grid w-full grid-cols-2 gap-4 py-4 bg-gradient-to-b from-transparent to-black">
      <div className="relative w-full max-w-[150px] text-2xl flex items-center text-white font-russo h-[60px] cursor-pointer">
      <Link href="/"><Image src={logo}></Image></Link>

      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-end text-lg text-white">
          <a href="https://twitter.com/RensTokenBSC" target="_blank" rel="noreferrer"><FiTwitter /></a>
          <a href="https://www.instagram.com/renstoken/" target="_blank" rel="noreferrer"><FiInstagram className="mx-4" /></a>
          <a href="https://www.linkedin.com/company/renstokenbsc/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
        </div>
        <div className="mt-3 text-[10px] text-right text-white font-russo">
          Copyright © 2022 Rens Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
