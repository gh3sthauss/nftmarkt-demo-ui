import React from "react";
import Accordion from "../components/Accordion/Accordion";
import Feature from "../components/Feature/Feature";
import InformationCircle from "../components/InformationCircle/InformationCircle";
import Card from "../components/Card/Card";
import Footer from "../components/Layout/Footer";
import bg from "../public/images/card2.jpg";
import home2 from "../public/images/home.webp";

const data = [
  {
    id: 1,
    title: "What is RENS Token?",
    description: `RENS is an NFT real-estate project. Its total supply is limited to 1,000,000,000.`,
  },
  {
    id: 2,
    title: "What is the use of Metaverse?",
    description: `RENS creates many properties with different structures and different earning systems in the metaverse.It allows its investors to see 3D version of the properties in there. These properties are converted into NFTs and made available for sale on the IHO page.`,
  },
  {
    id: 3,
    title: "What are the properties in the Metaverse?",
    description: `Metaverse, which first started with the bungalow houses project, then continues with the villas. As RENS evolves, hotels, cars, etc. other properties will be added as well.By offering these properties as NFT, a title deed system can be created.`,
  },
];

const card = [
  { id: 1, title: "Toplam Yakılan X", value: "123.123.000", img: bg },
  { id: 2, title: "Toplam Yakılan Y", value: "123.123.000", img: bg },
  { id: 3, title: "Toplam Yakılan Z", value: "123.123.000", img: bg },
];

const infoCard = [
  {
    id: 1,
    img: home2,
    title: "Coming Soon",
    etcValue: "?.??",
    usdValue: "?.???",
  },
  {
    id: 2,
    img: home2,
    title: "Coming Soon",
    etcValue: "?.??",
    usdValue: "?.???",
  },
  {
    id: 3,
    img: home2,
    title: "Coming Soon",
    etcValue: "?.??",
    usdValue: "?.???",
  },
  {
    id: 4,
    img: home2,
    title: "Coming Soon",
    etcValue: "?.??",
    usdValue: "?.???",
  },
];
export default function Home() {
  return (
    <>
      <Feature />
      <div className="relative pBox max-w-[1440px] mx-auto">
        <div className="relative z-30 w-full pt-10 bg-gradient-to-b from-black to-[#000000b7] font-russo">
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            {card.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div> */}

          <div className="nftcol relative mt-28 gap-4 sm:gap-10 border-l grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 border-r lg:p-16 sm:p-10 p-4 border-gray-500  after:absolute after:w-[80%] after:h-[1px] after:bg-gray-500 before:absolute before:w-[80%] before:h-[1px] before:bg-gray-500 before:right-0 before:top-0 after:bottom-0 after:left-0">
            {infoCard.map((item, index) => (
              <InformationCircle key={index} data={item} />
            ))}
          </div>

          {/* SSS */}
          <div className="w-full space-y-8 my-28">
            {data.map((item, index) => (
              <Accordion key={index} data={item} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
