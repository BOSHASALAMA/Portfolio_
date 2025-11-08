"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
const Projects = () => {
  return (
       <div className="min-h-screen pt-20 pb-10 w-full flex items-center flex-wrap justify-center bg-slate-950 ">
             <PinContainer
        title="Demo"
        href="https://e-commerce-virid-five.vercel.app/"
        title2="Github"
        href2="https://github.com/BOSHASALAMA/E-commerce"
      >
        <div className="flex basis-full justify-around h-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
          <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
            E-commerce App
          </h3>
          <div className="text-base h-[200px] pb-2! m-0! font-normal">
            <span className="text-slate-500 text-sm ">
Responsive and full-featured e-commerce website using Next.js and TypeScript, with modern 
UI components styled by Tailwind CSS.          
          </span>
          </div>
          <div style={{backgroundImage:'url(/proj1.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="Demo"
        href="https://ai-travel-livid.vercel.app/"
         title2="Github"
        href2="https://github.com/BOSHASALAMA/ai-travel"
      >
        <div className="flex basis-full flex-col justify-around p-4  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
          <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
           AI-TravelPlanner
          </h3>
          <div className="text-base h-[200px] pb-2! m-0! font-normal">
            <span className="text-slate-500 ">
 Smart travel platform powered by AI and modern web technologies, there is two user roles  
Admin (only one) – can add and manage new travel destinations  
Regular Users – can explore destinations, make bookings, and complete checkouts              </span>
          </div>
          <div style={{backgroundImage:'url(/proj2.png)',backgroundPositionX:'center',backgroundSize:'cover' }} className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
           <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col justify-around p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
          <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base h-[200px] pb-2! m-0! font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    
           <PinContainer
        title="GitHub"
        href="https://github.com"
        title2="Live Demo"
        href2="https://example.com"
      >
        <div className="flex basis-full flex-col justify-around p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
          <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
            My Projects
          </h3>
          <div className="text-base h-[200px] pb-2! m-0! font-normal">
            <span className="text-slate-500 ">
              Explore my code repositories and contributions.
            </span>
          </div>
          <div className="flex w-full h-48 rounded-lg mt-4 bg-linear-to-br from-green-500 via-blue-500 to-purple-500" />
        </div>
      </PinContainer>
    </div>

  )
}

export default Projects
