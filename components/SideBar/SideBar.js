import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdFavorite,
  MdAccountBalanceWallet,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";

function SideBar() {
  return (
    <div className="relative flex text-white text-3xl sm:flex-col items-center justify-between z-10 h-min sm:space-x-0 space-x-2 sm:h-[520px] py-4 sm:py-8 px-4 bg-[#101024] border border-indigo-700 font-russo rounded-2xl  border-opacity-30">
      <Link href="/">
        <a>
          <MdDashboard className="cursor-pointer" />
        </a>
      </Link>
      <Link href="">
        <a>
          <MdFavorite className="cursor-pointer" />
        </a>
      </Link>
      <Link href="">
        <a>
          <MdAccountBalanceWallet className="cursor-pointer" />
        </a>
      </Link>
      <Link href="">
        <a>
          <MdSettings className="cursor-pointer" />
        </a>
      </Link>
      <Link href="">
        <a className="sm:mt-16">
          <MdExitToApp className="cursor-pointer" />
        </a>
      </Link>
    </div>
  );
}

export default SideBar;
