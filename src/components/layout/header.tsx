'use client';

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from 'lucide-react';
import { useActiveSectionContext } from "@/context/active-section-context";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {'<MC />'}
  </Typography>
);

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        // className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  // "flex w-full items-center justify-center px-3 py-3 hover:text-gray-800 transition dark:text-gray-500 dark:hover:text-gray-300",
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-800 transition",
                  {
                    // "text-gray-800 dark:text-gray-200":
                    "text-gray-800":
                      activeSection === link.label,
                  }
                )}
                href={link.href}
                onClick={(e) => {
                  if (link.label === "Home") {
                    e.preventDefault(); // Prevent the link from navigating
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
                  }
                  setActiveSection(link.label);
                  setTimeOfLastClick(Date.now());
                }}
              >
                
                {link.label}

                {link.label === activeSection && (
                  <motion.span
                    // className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
