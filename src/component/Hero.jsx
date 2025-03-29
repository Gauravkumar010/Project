import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
export default function Hero({ slides }) {
  const [curr, setcurr] = useState(0);

  const prev = () => {
    setcurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setcurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
  };
  return (

    <div className="relative overflow-hidden w-full h-[400px]">
      <div
        className={`flex transition ease-out duration-500 `}
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} alt="img" className="w-screen h-[400px] object-cover flex-shrink-0" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black px-3">
        <button className="rounded-full bg-white" onClick={prev}>
          <FiArrowLeft />
        </button>
        <button className="rounded-full bg-white"  onClick={next}>
          <FiArrowRight />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setcurr(i);
              }}
              key={i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == curr ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
