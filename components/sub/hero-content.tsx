"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FolderIcon, DocumentTextIcon, StarIcon } from "@heroicons/react/24/outline";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";
import { useStarContext } from "@/contexts/star-context";

export const HeroContent = () => {
  const { showStars, setShowStars } = useStarContext();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-row items-center justify-between px-15 mt-40 w-full z-[20]"
    >
      {/* Left side navigation buttons (fixed on screen) */}
      <motion.div 
        variants={slideInFromLeft(1)} 
        className="fixed left-4 top-0 bottom-0 flex flex-col justify-center gap-4 z-50"
      >
        <div className="group">
          <Link
            href="#projects"
            className="flex items-center gap-3 p-3 w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/40 hover:border-purple-400 hover:w-auto hover:px-6 hover:rounded-full transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
              <FolderIcon className="w-5 h-5 text-purple-300" />
            </div>
            <span className="text-purple-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
              View Projects
            </span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="#resume"
            className="flex items-center gap-3 p-3 w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/40 hover:border-cyan-400 hover:w-auto hover:px-6 hover:rounded-full transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <DocumentTextIcon className="w-5 h-5 text-cyan-300" />
            </div>
            <span className="text-cyan-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
              View Resumes
            </span>
          </Link>
        </div>

        <div className="group">
          <button
            onClick={() => setShowStars(!showStars)}
            className="flex items-center gap-3 p-3 w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/40 hover:border-orange-400 hover:w-auto hover:px-6 hover:rounded-full transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/30 flex items-center justify-center flex-shrink-0">
              <StarIcon className="w-5 h-5 text-orange-300" />
            </div>
            <span className="text-orange-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
              {showStars ? "Hide Stars" : "Show Stars"}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Right side tools/icons image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full ml-auto flex justify-end items-center pr-6"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
