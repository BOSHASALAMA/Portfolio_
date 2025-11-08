import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const Header = () => {
     const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "/",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "/products",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "/components",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://ui.aceternity.com",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "/changelog",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "https://twitter.com/aceternity",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-cyan-400 dark:text-cyan-300" />
      ),
      href: "https://github.com/aceternity",
    },
  ];
  return (
  <div className="fixed w-full flex justify-start z-50 mt-8 pl-4 pt-8">
      <FloatingDock
        mobileClassName="translate-y-8" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

export default Header
