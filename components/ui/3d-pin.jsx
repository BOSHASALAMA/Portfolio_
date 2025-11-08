"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";


export const PinContainer = ({
  children,
  title,
  href,
  title2,
  href2,
  className,
  containerClassName
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      suppressHydrationWarning={true}
      className={cn("relative group/pin z-30  cursor-pointer py-44 md:py-32", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => { if (!e.target.closest('.pin-button')) window.open(href || "/", '_blank'); }}>
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/3 -translate-y-1/2">
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/6 p-4 top-1/2  flex justify-center items-center  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/10 group-hover/pin:border-white/20 transition duration-700 overflow-hidden">
          <div className={cn(" relative z-30 h-[500px]", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} title2={title2} href2={href2} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
  title2,
  href2
}) => {
  return (
    <div suppressHydrationWarning={true}>
      <motion.div
        className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/pin:opacity-100 z-20 transition duration-500">
        <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-5 md:top-7  inset-x-0 flex flex-col gap-2 justify-center">
          <div
            suppressHydrationWarning={true}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(href, '_blank'); }}
            className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 cursor-pointer ml-2 pin-button pointer-events-auto">
            <span
              className="relative  z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span
              className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-cyan-600/0 via-cyan-600/90 to-cyan-600/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
          {title2 && href2 && (
            <div
              suppressHydrationWarning={true}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(href2, '_blank'); }}
              className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 cursor-pointer ml-2 pointer-events-auto">
              <span
                className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                {title2}
              </span>

              <span
                className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-cyan-600/0 via-cyan-600/90 to-cyan-600/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </div>
          )}
        
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
          <>
            <motion.div
              suppressHydrationWarning={true}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
            <motion.div
              suppressHydrationWarning={true}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
            <motion.div
              suppressHydrationWarning={true}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
          </>
        </div>

        <>
          <motion.div
            className="absolute right-1/2 bottom-1/2 bg-linear-to-b from-transparent to-cyan-500 translate-y-3.5 w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div
            className="absolute right-1/2 bottom-1/2 bg-linear-to-b from-transparent to-cyan-500 translate-y-3.5 w-px h-20 group-hover/pin:h-40  " />
          <motion.div
            className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-3.5 w-1 h-1 rounded-full z-30 blur-[3px]" />
          <motion.div
            className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-3.5 w-.5 h-.5 rounded-full z-30 " />
        </>
      </div>
    </motion.div>
    </div>
  );
};
