import About from "@/_components/About";
import Header from "@/_components/Header";
import Hero from "@/_components/Hero";
import Projects from "@/_components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center font-sans">
     <Header/>
    </div>
    <div className="relative">
         <Hero/>
         <About/>
         <Projects/>
</div>
    </>
  );
}
