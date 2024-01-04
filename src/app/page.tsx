"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY_DATA, ABOUT_ME } from "../constants/data";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClick = (event: any) => {
    setSelectedIndex(event.target.id);
  };

  return (
    <main className="container mx-auto py-8 px-6 xl:px-0">
      <nav className="flex justify-center md:justify-end w-full sticky bg-black py-4 top-0 z-50">
        <a href="#" className="text-white font-light text-lg mr-6">
          Projects
        </a>
        <a href="#" className="text-white font-light text-lg mr-6">
          Resume
        </a>
        <a href="#" className="text-white font-light text-lg">
          Contact
        </a>
      </nav>
      <div className="py-8">
        <p className="lg:w-full xl:w-2/3 h-auto md:h-44 lg:h-24 xl:24 text-5xl md:text-7xl leading-tight text-center md:text-start md:mt-12 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple via-lightblue to-pink animate-text">
          {"Hey! I'm Samet Şahin"}
        </p>
        <p className="text-lightwhite text-center md:text-start text-lg font-light">
          {ABOUT_ME}
        </p>
        <a
          href={"mailto:sametsahin37@hotmail.com"}
          className="flex flex-row justify-center md:justify-start items-center my-28 mt-8 w-auto"
        >
          <p className="text-white text-xl font-light mr-4">
            {"Let's talk. Send me e-mail!"}
          </p>
          <Image
            src="/right_arrow.png"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </a>
        <div id="experiences">
          <p className="text-white mt-12 font-light mb-6 text-center md:text-start">
            MY EXPERIENCES
          </p>
          <div className="flex flex-row overflow-x-auto">
            {COMPANY_DATA.map((data, index) => (
              <button
                key={index}
                id={index.toString()}
                className={`${
                  selectedIndex == index ? `bg-gray` : `bg-black`
                } hover:bg-gray rounded-md text-lightwhite font-light p-4 mr-8 lg:mr-24`}
                onClick={(event) => onClick(event)}
              >
                {data.companyName}
              </button>
            ))}
          </div>
          {COMPANY_DATA.map((data, index) => (
            <div
              key={index}
              className={`mt-12 ${selectedIndex != index && "hidden"}`}
            >
              <div className="flex flex-row justify-between">
                <div className="mb-6">
                  <p className="text-white font-light text-xl">
                    {data.role} ({data.workModel})
                  </p>
                  <p className="text-blue font-light mt-2">
                    {data.companyName} - {data.city}
                  </p>
                </div>
                <p className="text-lightgray font-light">{data.date}</p>
              </div>
              <div>
                {data.info.map((item, index) => (
                  <p key={index} className="text-lightgray font-light text-lg">
                    - {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-px my-8 border-0 bg-darkgray"></hr>
    </main>
  );
}
