import About from "@/_components/About";
import Contact from "@/_components/Contact";
import Header from "@/_components/Header";
import Hero from "@/_components/Hero";
import Projects from "@/_components/Projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    <div className="flex justify-center font-sans">
     <Header/>
    </div>
    <div className="relative">
         <div
           
         >
           <Hero/>
         </div>
         <div
         
         >
           <About/>
         </div>
         <div
         
         >
           <Projects/>
         </div>
         <div
        
         >
           <Contact/>
         </div>
</div>
    </>
  );
}
