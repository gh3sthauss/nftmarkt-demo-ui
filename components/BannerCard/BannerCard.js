import Image from "next/image";
import React from "react";
import banner from "../../public/images/banner.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function BannerCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      {loaded && instanceRef.current && (
        <>
          <button
            className="absolute z-10 text-white -translate-y-1/2 rounded-full tranform left-2 disabled:opacity-50 top-1/2"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <FaChevronCircleLeft size={22} />
          </button>

          <button
            className="absolute z-10 text-white -translate-y-1/2 rounded-full tranform right-2 disabled:opacity-50 top-1/2"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <FaChevronCircleRight size={22} />
          </button>
        </>
      )}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="w-full overflow-hidden rounded-2xl relative h-[300px]">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src={banner}
              priority
              quality={100}
            />
            <div className="absolute rounded-l-2xl overflow-hidden bg-white/10 backdrop-blur-md sm:h-full justify-center flex flex-col left-0 sm:max-w-[320px] w-full bottom-0 p-5 sm:p-10">
              <h1 className="text-xl tracking-wider text-white font-russo sm:text-2xl">
                Discover, Collect, Create and Sell{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-indigo-800">
                  NFTs
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="w-full overflow-hidden rounded-2xl relative h-[300px]">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src={banner}
              priority
              quality={100}
            />
            <div className="absolute rounded-l-2xl overflow-hidden bg-white/10 backdrop-blur-md sm:h-full justify-center flex flex-col left-0 sm:max-w-[320px] w-full bottom-0 p-5 sm:p-10">
              <h1 className="text-xl tracking-wider text-white font-russo sm:text-2xl">
                Discover, Collect, Create and Sell own{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-indigo-800">
                  NFT
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
