"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";

import { PinContainer } from "@/components/ui/3d-pin";
const Projects =React.memo(() => {
  return (
       <div id="projects" className="min-h-screen w-full flex flex-col justify-center items-center bg-slate-950 px-4 py-32">
         <motion.h1 
        initial={{opacity:0,y:70}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        className="text-4xl md:text-6xl font-bold text-center mb-10 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
           My Projects
         </motion.h1>
         <div className="flex items-center flex-wrap justify-center gap-4 pb-10">
        <PinContainer
        key="ecommerce"
        title="Demo"
        href="https://e-commerce-eta-ivory-32.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/E-commerce"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            E-commerce App
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / Typescript / Next Js / Tailwind /<br/>  Framer-Motion  </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
The platform allows users to browse products (shoes, clothes,
furniture, and electronics), sign up / sign in, add items to cart or wishlist, and place orders. Implemented
cart management, order tracking, and seamless user experience across all devices
          </span>
          </div>
          <div style={{backgroundImage:'url(/proj1.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
      <PinContainer
        key="ai-travel"
        title="Demo"
        href="https://ai-travel-livid.vercel.app/"
         title2="Github"
        href2="https://github.com/BOSHASALAMA/ai-travel"
      >
        <div className="flex basis-full flex-col justify-around p-6  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
           AI-TravelPlanner
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / Tailwind / Javascript / Next Js / Shadcn UI / Aceternity UI </span>
<br/>
            <span className="text-slate-300 text-sm leading-relaxed">
 Smart travel platform powered by AI and modern web technologies, there is two user roles
Admin (only one) – can add and manage new travel destinations
Regular Users – can explore destinations, make bookings, and complete checkouts              </span>
          </div>
          <div style={{backgroundImage:'url(/proj2.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
           <PinContainer
        key="car-hub"
        title="Demo"
        href="https://car-hub-five.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/Car_Hub"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Car Hub
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / Tailwind / Typescript / Next Js / Headless UI   </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
 Allows users to efficiently browse and explore cars through an intuitive interface. It includes a powerful search feature for finding vehicles by make and model, along with custom filters that refine results by year and engine type.
          </span>
          </div>
          <div style={{backgroundImage:'url(/proj3.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
       <PinContainer
        key="grocery-shop"
        title="Demo"
        href="https://grocery-shop-jias.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/grocery_shop"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
           Grocery Shop
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / CSS / Tailwind / Javascript / Next Js /<br/> Shadcn UI </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
This grocery shop app offers a clean, responsive layout with items organized into categories like Bakery, Meat & Eggs, Fruits, Drinks, and Bread. Products show prices and sales clearly, and cart management is handled using the react-use-cart package for smooth add, remove, and update operations.   </span>
          </div>
          <div style={{backgroundImage:'url(/proj4.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
      <PinContainer
        key="corona-inf"
        title="Demo"
        href="https://corona-inf.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/Corona_Inf"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Corona_Inf
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / Tailwind / Javascript / Next Js / Shadcn UI / Aceternity UI </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
Web Application that allows users to search for any country and get up to data information about covid-19 cases
such as the number of confirmed cases, recoveries, and deaths.  </span>
          </div>
          <div style={{backgroundImage:'url(/proj5.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
       <PinContainer
        key="movie-app"
        title="Demo"
        href="https://corona-inf.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/MovieProject"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Movie app
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / CSS / bootstrap / Javascript / React Js   </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
Responsive web application that allows users to sign up, sign in, explore a wide collection of movies and shows
and browse through various titles, view detailed information about each movie     </span>
          </div>
          <div style={{backgroundImage:'url(/proj6.png)',backgroundPositionX:'left',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
            <PinContainer
        key="crud-system"
        title="Demo"
        href="https://boshasalama.github.io/Crud_system__/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/Crud_system__"
      >
        <div className="flex basis-full justify-around h-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-linear-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          <h3 className="max-w-xs pb-3! m-0! font-bold text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Crud System
          </h3>
          <div className="text-base h-[200px] pb-3! m-0! font-normal">
            <span className="text-[12px] text-cyan-300 font-medium">Tools: HTML / CSS / bootstrap / Javascript   </span>
            <br/>
            <span className="text-slate-300 text-sm leading-relaxed">
A CRUD project that allows users to Create, Read, Update, and Delete data through a simple and organized interface. The app focuses on clean layout, smooth interactions, and efficient state handling, making it easy to manage records in real time.</span>
          </div>
          <div style={{backgroundImage:'url(/proj7.png)',backgroundPositionX:'left',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-md" />
        </div>
      </PinContainer>
         </div>
       </div>

  )
})

export default Projects
