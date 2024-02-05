"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY_DATA, ABOUT_ME, PROJECTS } from "../constants/data";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClick = (event: any) => {
    setSelectedIndex(event.target.id);
  };

  return (
    <main className="container mx-auto py-8 px-6 xl:px-0">
      <div id="about" className="py-8">
        <p className="lg:w-full xl:w-2/3 h-auto md:h-44 lg:h-24 xl:24 text-5xl md:text-7xl leading-tight text-center md:text-start md:mt-12 font-extrabold bg-clip-text text-transparent animate-text bg-gradient-to-r from-purple via-lightblue to-pink">
          {"Hey! I'm Samet Şahin"}
        </p>
        <p className="text-lightwhite text-center md:text-start text-lg font-light mt-4 lg:mt-0 leading-relaxed">
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
          <p className="text-white text-lg mt-12 font-light mb-6 text-center md:text-start">
            EXPERIENCES
          </p>
          <div className="flex flex-row overflow-x-auto">
            {COMPANY_DATA.map((data, index) => (
              <button
                key={index}
                id={index.toString()}
                className={`${
                  selectedIndex == index ? `bg-gray` : `bg-black`
                } hover:bg-gray rounded-md text-lightwhite font-light w-40 py-4 px-6 md:px-0 mr-8 lg:mr-24`}
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
      <div id="projects">
        <p className="text-white text-lg font-light text-center md:text-start mb-24 lg:mb-8 md:mb-0">
          FEAUTURED PROJECTS
        </p>
        <div className="flex flex-col md:flex-row">
          {PROJECTS.map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 mb-12">
              <Image
                src={item.img}
                width={item.width}
                height={item.height}
                alt="Picture of the author"
                className="mb-4 mx-auto rounded-lg"
              />
              <p className="text-white text-lg">{item.name}</p>
              <p className="text-lightgray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-px my-8 border-0 bg-darkgray"></hr>
      <div
        id="contact"
        className="flex flex-col md:flex-row items-center justify-between"
      >
        <p className="text-white text-lg font-light text-center md:text-start mb-4 md:mb-0">
          CONTACT
        </p>
        <div className="flex flex-col md:flex-row">
          <a
            className="mr-4 rounded-md w-48 bg-gradient-to-r p-[2px] from-[#d1c233] via-[#98296f] to-[#50089d] mb-4 md:mb-0"
            href={"mailto:sametsahin37@hotmail.com"}
          >
            <div className="flex flex-row justify-center items-center bg-black text-white rounded-md p-3 ">
              <Image
                src="/mail.png"
                width={30}
                height={30}
                alt="E-mail Icon"
                className="mr-2"
              />
              Send an email
            </div>
          </a>
          <a
            className="mr-4 rounded-md w-48 bg-gradient-to-r p-[2px] from-[#bdccc6] via-[#b7c81e] to-[#d76107] mb-4 md:mb-0"
            href="https://www.linkedin.com/in/sametsahin0/"
            target="_blank"
          >
            <div className="flex flex-row justify-center items-center bg-black text-white rounded-md p-3">
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="LinkedIn Icon"
                className="mr-2"
              />
              LinkedIn
            </div>
          </a>
          <a
            className="rounded-md w-48 bg-gradient-to-r p-[2px] from-[#0a3d29] via-[#3B82F6] to-[#9333EA] mb-4 md:mb-0"
            href="https://github.com/sametcl2"
            target="_blank"
          >
            <div className="flex flex-row justify-center items-center bg-black text-white rounded-md p-3 ">
              <Image
                src="/github.png"
                width={30}
                height={30}
                alt="Github Icon"
                className="mr-2"
              />
              Github
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
