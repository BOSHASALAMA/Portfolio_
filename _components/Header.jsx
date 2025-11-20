'use client'
import React, { useCallback } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconHome,
  IconMessage,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const Header = React.memo(() => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

     const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "#",
      onClick: (e) => { e.preventDefault(); scrollToSection('hero'); },

    },

    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "#",
      onClick: (e) => { e.preventDefault(); scrollToSection('about'); },
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "#",
      onClick: (e) => { e.preventDefault(); scrollToSection('projects'); },
    },
    {
      title: "Contact",
      icon: (
       <IconMessage className="h-full w-full text-cyan-400 dark:text-cyan-300"/>
      ),
      href: "#",
      onClick: (e) => { e.preventDefault(); scrollToSection('contact'); },

    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "https://www.linkedin.com/in/beshoi-salama-943392208/",
      target: "_blank",

    },

    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "https://github.com/BOSHASALAMA",
      target: "_blank",

    },
   
  ];
  return (
  <div className="fixed w-full flex justify-start z-50 mt-4 pl-4 md:pt-12">
      <FloatingDock
       initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:.8}}
        mobileClassName="translate-y-4" // only for demo, remove for production
        items={links}
        
      />
    </div>
  )
}
)
export default Header
