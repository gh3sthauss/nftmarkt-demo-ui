import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "About",
    description: `Rens metaverse is not only a piece of image on the internet, but also filled with properties that have their equivalent in the real world. Rens first sells these properties as NFT, then these properties are either built from scratch or similar one purchased by Rens's partner companies in the real world. Investors then receive rental income from these properties.`,
  },
  {
    id: 2,
    title: "Terms",
    description: `Rens metaverse is not only a piece of image on the internet, but also filled with properties that have their equivalent in the real world. Rens first sells these properties as NFT, then these properties are either built from scratch or similar one purchased by Rens's partner companies in the real world. Investors then receive rental income from these properties.`,
  },
];

function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-4 bg-indigo-500 border border-indigo-700 font-russo rounded-2xl bg-opacity-10 border-opacity-30">
      <ul className="flex w-auto overflow-x-auto text-base border-b border-indigo-700 cursor-pointer smx:ml-6 2xlx:text-xl smx:text-lg">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "bg-indigo-800  text-white" : " text-white"
            } whitespace-nowrap mr-2 hover:bg-indigo-800 sm:text-lg text-base rounded-t-md px-8 py-2 font-bold `}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="w-full text-white shadow-sm h-min">
        <div className="p-4 mt-4 text-sm sm:text-base">
          {tabs.filter((tab) => tab.id === activeTab)[0] && (
            <div>
              {tabs.filter((tab) => tab.id === activeTab)[0].description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;
