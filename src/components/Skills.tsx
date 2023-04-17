import React from "react"

import { FaReact } from "react-icons/fa"
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
      <div className="gap-x-4 gap-y-20 flex flex-wrap justify-center [&_div]:w-[20%] items-center text-center mt-32">
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

/* 
      <div className="w-full mx-auto p-5 sm:p-24">
        <div>
          <p className="text-center text-xl sm:text-7xl text-yellow-500 mb-10 pt-5 sm:pt-0">
            {list.map((item) => (
              <span className="transition-all hover:text-9xl hover:font-extrabold hover:underline">
                {item}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="sm:w-3/4 text-md sm:text-3xl mx-auto">
          <p className="mt-5">
            beginner knowledge of C and Python (Django) with strong basics of{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              JavaScript{" "}
            </span>
            , HTML, and CSS.
          </p>
          <p className="mt-5">
            Along with technical skills, I bring{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              transferable skills{" "}
            </span>
            from my previous career such as time management, organization,
            teamwork, and communication.
          </p>
          <p className="mt-5">
            My interest in front-end development and UX design has led me to
            develop small projects using Next.js, React, and Django.
          </p>
        </div>
      </div>
*/
