import React from "react";
import IconCross from "@/assets/images/icon-cross.png";
import PortinosLogo from "@/assets/images/portinoslogop.jpg";
import GPTWLogo from "@/assets/images/gptw2025.webp";

export const Welcome = ({ setIsPopUpOpen }) => {
  return (
    <div className="animate-slideIn p-20 pt-10 absolute z-50  bg-white rounded-2xl bg-opacity-65 border border-white ">
      <img
        src={IconCross}
        className="w-3 absolute top-3 right-4 cursor-pointer hover:scale-125 active:scale-90 transition-transform"
        onClick={() => setIsPopUpOpen(false)}
      />
      <p className="text-xl">
        Welcome! <br /> <span className="text-lg">to our</span>
      </p>
      <h1 className="relative font-bold -mt-2 font-sans text-2xl">
        <span className="relative top-1 pr-1 text-4xl ">✨</span>
        Office Tour
        <span className="relative top-2 pl-2 text-4xl ">🥽</span>
      </h1>
      <p className="font-light text-sm">now available on VR!</p>
      <div className=" relative pt-2 pb-7 flex justify-center">
        <a
          className="absolute active:scale-90 transition-transform hover:scale-105"
          href="https://agencia.portinos.com/"
          target="_blank"
          rel="noopener"
        >
          <img
            className=" aspect-square w-20 rounded-full object-contain border border-white"
            src={PortinosLogo}
          />
        </a>
        <img
          className="absolute aspect-square w-28 left-[90%] top-full drop-shadow-[0_0_0.5px_rgba(255,255,255)] object-contain "
          src={GPTWLogo}
        />
      </div>
    </div>
  );
};
