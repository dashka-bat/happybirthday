"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: December 10th 23:59:59 of current year
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, 11, 10, 23, 59, 59); // Month is 0-indexed (11 = Dec)

    // If Dec 10 has passed this year, maybe they mean next year? 
    // But usually for a birthday page it's relevant to the current celebration.
    // If today IS Dec 10, it counts down to end of day.
    // If today is BEFORE Dec 10, maybe count to START? 
    // User said "duusah tsag" (finishing time), implying end of the day.
    
    // Let's ensure we are counting down to the END of Dec 10.
    
    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = target.getTime() - currentTime.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-[#ff6781] font-bold text-2xl mt-8 justify-center lg:justify-start">
      <div className="flex flex-col items-center">
        <div className="bg-white/80 w-16 h-16 rounded-lg flex items-center justify-center shadow-md border-2 border-[#ff6781]/20">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="text-sm mt-1 text-black/60">Hours</span>
      </div>
      <div className="self-start mt-2">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white/80 w-16 h-16 rounded-lg flex items-center justify-center shadow-md border-2 border-[#ff6781]/20">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="text-sm mt-1 text-black/60">Minutes</span>
      </div>
      <div className="self-start mt-2">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-white/80 w-16 h-16 rounded-lg flex items-center justify-center shadow-md border-2 border-[#ff6781]/20">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className="text-sm mt-1 text-black/60">Seconds</span>
      </div>
    </div>
  );
}
