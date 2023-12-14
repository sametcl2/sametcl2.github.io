"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // const texts = [`Hi!`, `I'm Samet.`];
  // const [heroText, setHeroText] = useState<string>(texts[0]);

  // useEffect(() => {
  //   const changeHeroText = setInterval(() => {
  //     const index = texts.findIndex((item) => item === heroText);
  //     if (index < texts.length) {
  //       setHeroText(texts[index + 1]);
  //     }
  //   }, 2000);
  //   return () => {
  //     clearInterval(changeHeroText);
  //   };
  // }, []);

  return (
    <main className="flex flex-col justify-between min-h-screen py-40">
      <div className="flex flex-col justify-center items-center select-none">
        <p className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-800 animate-text antialiased">
          Hi!
        </p>
        <p className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-800 animate-text antialiased">
          {`I'm Samet`}
        </p>
      </div>
    </main>
  );
}
