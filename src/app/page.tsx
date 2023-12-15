"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <main className="flex flex-col justify-center md:justify-between items-center text-center min-h-screen md:py-24 select-none">
      <p className="text-3xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-600 to-fuchsia-700 animate-text antialiased">
        Hi!
      </p>
      <p className="text-3xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-600 to-fuchsia-700 animate-text antialiased">
        Nice to see you here.
      </p>
      <p className="text-3xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-600 to-fuchsia-700 animate-text antialiased">
        {`I'm Samet.`}
      </p>

      <div className="flex flex-col justify-center items-center mt-8">
        <p className="text-white text-xl font-semibold antialiased mb-3">
          More about myself
        </p>
        <Image
          className="animate-bounce"
          src="/arrow.png"
          width={30}
          height={30}
          alt="icon"
        />
      </div>
    </main>
  );
}
