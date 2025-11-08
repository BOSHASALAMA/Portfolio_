"use client";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/moving-border";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pt-32 pointer-events-none text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-2xl animate-pulse">
          Hi, I'm Beshoi Salama
        </h1>
        <p className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-6 text-cyan-300">
          Frontend Developer
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-gray-200 mb-8">
          I craft solid and scalable frontend products with great user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            View My Work
          </Button>
          <Button className="px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            Download CV
          </Button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero
