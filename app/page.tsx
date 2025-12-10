
"use client";

import { motion } from "framer-motion";
import Balloons from "./components/Balloons";
import Countdown from "./components/Countdown";
import { useState } from "react";
import WishesModal from "./components/WishesModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#ffeef1] flex items-center justify-center px-4 relative overflow-hidden">
      {/* 🎈 BALLOONS: generate positions on client only to avoid hydration mismatch */}
      <Balloons />
      
      {/* MODAL */}
      <WishesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* top flags - spanning across */}
      <img
        src="/flags-left.svg"
        className="absolute top-0 left-0 w-40 sm:w-60 select-none z-10"
      />
       <img
        src="/flags-left.svg"
        className="absolute top-[-10px] left-[15%] w-40 sm:w-60 select-none opacity-80"
      />
      <img
        src="/flags-right.svg"
        className="absolute top-[-5px] left-[30%] w-40 sm:w-60 select-none opacity-90"
      />
       <img
        src="/flags-left.svg"
        className="absolute top-[-8px] right-[30%] w-40 sm:w-60 select-none opacity-90"
      />
       <img
        src="/flags-right.svg"
        className="absolute top-[-12px] right-[15%] w-40 sm:w-60 select-none opacity-80"
      />
      <img
        src="/flags-right.svg"
        className="absolute top-0 right-0 w-40 sm:w-60 select-none z-10"
      />

      {/* bottom flags - spanning across (flipped) */}
      <img
        src="/flags-left.svg"
        className="absolute bottom-0 left-0 w-40 sm:w-60 select-none z-10 scale-y-[-1]"
      />
       <img
        src="/flags-left.svg"
        className="absolute bottom-[-10px] left-[15%] w-40 sm:w-60 select-none opacity-80 scale-y-[-1]"
      />
      <img
        src="/flags-right.svg"
        className="absolute bottom-[-5px] left-[30%] w-40 sm:w-60 select-none opacity-90 scale-y-[-1]"
      />
       <img
        src="/flags-left.svg"
        className="absolute bottom-[-8px] right-[30%] w-40 sm:w-60 select-none opacity-90 scale-y-[-1]"
      />
       <img
        src="/flags-right.svg"
        className="absolute bottom-[-12px] right-[15%] w-40 sm:w-60 select-none opacity-80 scale-y-[-1]"
      />
      <img
        src="/flags-right.svg"
        className="absolute bottom-0 right-0 w-40 sm:w-60 select-none z-10 scale-y-[-1]"
      />

 
      {/* STICKERS - Left Side */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        src="/image copy.png"
        className="absolute left-[5%] top-[20%] w-32 sm:w-40 -rotate-12 select-none z-0 hover:scale-110 transition-transform mix-blend-multiply brightness-105 contrast-105"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        src="/image copy 3.png"
        className="absolute left-[8%] bottom-[20%] w-36 sm:w-44 rotate-6 select-none z-0 hover:scale-110 transition-transform mix-blend-multiply brightness-105 contrast-105"
      />

       {/* STICKERS - Right Side */}
       <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        src="/image copy 2.png"
        className="absolute right-[5%] top-[25%] w-32 sm:w-40 rotate-12 select-none z-0 hover:scale-110 transition-transform mix-blend-multiply brightness-105 contrast-105"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        src="/image copy 4.png"
        className="absolute right-[8%] bottom-[25%] w-28 sm:w-36 -rotate-6 select-none z-0 hover:scale-110 transition-transform mix-blend-multiply brightness-105 contrast-105"
      />

      {/* decorations */}
      <div className="absolute text-black/30 text-xl left-10 top-1/3">✦</div>
      <div className="absolute text-black/30 text-xl right-16 top-1/2">✦</div>
      <div className="absolute text-black/30 text-xl left-1/2 bottom-20">✦</div>
      
      {/* smiley face */}
      {/* <motion.img
         initial={{ scale: 0, rotate: -20 }}
         animate={{ scale: 1, rotate: 0 }}
         transition={{ delay: 1, type: "spring" }}
         src="/smiley.svg"
         className="absolute left-[35%] bottom-[15%] w-16 sm:w-20 select-none z-10"
      /> */}

      {/* main content */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-10 relative z-20">
        {/* LEFT text side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[60px] sm:text-[80px] leading-none text-[#ff6781] drop-shadow-[4px_4px_0px_#1f1f1f20] font-[family-name:var(--font-titan-one)]"
          >
            Happy
            <br />
            <span className="block text-[#ff8a9c]">Birthday</span>
          </motion.h1>

          {/* date pill */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto lg:mx-0"
          >
            <div className="bg-gradient-to-r from-[#ff738a] to-[#ff5f7e] text-white px-8 py-3 rounded-full text-xl border-4 border-white/30 shadow-[0_8px_20px_rgba(255,115,138,0.4)] flex items-center gap-4 transform hover:scale-105 transition-transform font-[family-name:var(--font-titan-one)]">
              <img src="/image.png" className="w-12 h-12 object-contain mix-blend-multiply brightness-110 -rotate-12" alt="hat" />
              <span className="tracking-wide">10 December</span>
              <img src="/image.png" className="w-12 h-12 object-contain mix-blend-multiply brightness-110 rotate-12" alt="hat" />
            </div>
          </motion.div>

          {/* button */}
          <motion.button
             onClick={() => setIsModalOpen(true)}
             initial={{ opacity: 0, y: 25 }}
             animate={{ 
               opacity: 1, 
               y: 0,
               scale: [1, 1.05, 1],
             }}
             transition={{ 
               opacity: { delay: 0.8, duration: 0.6 },
               scale: {
                 repeat: Infinity,
                 duration: 1.5,
                 ease: "easeInOut",
                 repeatType: "reverse"
               }
             }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             className="cursor-pointer mx-auto lg:mx-0 inline-block bg-white text-[#ff6781] px-8 py-3 rounded-full border-2 border-[#ff6781]/20 shadow-lg hover:shadow-xl transition-all font-[family-name:var(--font-titan-one)] tracking-wider"
          >
             ❤️ Read Heartfelt Wishes ❤️
          </motion.button>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/50"
          > 
             <p className="text-[#ff5f7e] text-lg mb-2 uppercase tracking-widest text-center shadow-sm font-[family-name:var(--font-titan-one)]">Time Left Until Birthday Ends</p>
             <Countdown />
          </motion.div>

        </motion.div>

        {/* RIGHT profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {/* Hat removed */}
          
          <div className="rounded-full border-[8px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden w-64 h-64 sm:w-80 sm:h-80 bg-[#fce5e8] ring-4 ring-[#ff9aa8]/30">
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover"
              alt="girl"
            />
          </div>

          {/* name tag */}
          <div className="bg-[#ff8ca0]  px-6 py-2 rounded-full text-white text-lg border-[3px] border-black/20 shadow absolute left-1/2 -translate-x-1/2 -bottom-6 whitespace-nowrap z-30 font-[family-name:var(--font-titan-one)] tracking-wide">
            Dear Enkhsaruul
          </div>
        </motion.div>
      </div>



      {/* balloon styles moved to globals.css */}
    </main>
  );
}

/* random colors for balloons */

