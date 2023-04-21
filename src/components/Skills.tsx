import React from "react"

import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si"
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io"

function Skills() {
  const list = ["Languages", "and", "Frameworks"]
  return (
    <div className="w-full mx-auto h-screen p-5">
      <div>
        <p className="text-center text-xl lg:text-7xl sm:text-4xl text-yellow-600 sm:mb-10 pt-5">
          {list.map((item) => (
            <span className="transition-all">{item} </span>
          ))}
        </p>
      </div>
      <div className="gap-x-4 gap-y-20 flex flex-wrap justify-center [&_div]:w-[20%] items-center text-center mt-20">
        <div className="flex flex-col items-center">
          <IoLogoJavascript className="text-5xl mb-2" />
          <p className="mx-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoPython className="text-5xl mb-2" />
          <p className="mx-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoHtml5 className="text-5xl mb-2" />
          <p className="mx-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoCss3 className="text-5xl mb-2" />
          <p className="mx-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="text-5xl mb-2" />
          <p className="mx-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl mb-2" />
          <p className="mx-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-5xl mb-2" />
          <p className="mx-2">NextJS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl mb-2" />
          <p className="mx-2">NodeJs</p>
        </div>
        <div className="flex flex-col items-center">
          <SiDjango className="text-5xl mb-2" />
          <p className="mx-2">Django</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-5xl mb-2" />
          <p className="mx-2">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center">
          <SiBootstrap className="text-5xl mb-2" />
          <p className="mx-2">Bootstrap</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
