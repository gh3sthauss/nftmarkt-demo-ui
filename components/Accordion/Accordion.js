import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Accordion({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 py-2 text-xs text-white bg-black border border-white rounded-lg shadow-xl lg:text-base ">
      <div
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-between w-full p-2 font-medium uppercase rounded cursor-pointer select-none"
      >
        {data.title}

        <ChevronDownIcon
          className={`w-4 h-4 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className={`${open ? "flex flex-col w-full  py-2" : "hidden"}`}>
        <div className="px-2 py-[6px] flex items-center text-sm">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
