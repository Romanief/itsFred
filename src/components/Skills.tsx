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
  const list = ["Skills"]
  return (
    <div className="w-full mx-auto h-screen p-5">
      <div>
        <p className="text-center text-xl sm:text-7xl text-yellow-600 sm:mb-10 pt-5">
          {list.map((item) => (
            <span className="transition-all">{item} </span>
          ))}
        </p>
      </div>
      <div className="flex flex-col h-3/4 justify-around text-md sm:text-x md:w-3/4 mx-auto">
        <div className="flex justify-around">
          <div className="flex justify-between">
            <IoLogoJavascript />
            <p className="mx-2">JavaScript</p>
          </div>
          <div className="flex justify-between">
            <IoLogoPython />
            <p className="mx-2">Python</p>
          </div>
          <div className="flex justify-between">
            <IoLogoHtml5 />
            <p className="mx-2">HTML5</p>
          </div>
          <div className="flex justify-between">
            <IoLogoCss3 />
            <p className="mx-2">CSS3</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-between">
            <SiTypescript />
            <p className="mx-2">TypeScript</p>
          </div>
          <div className="flex justify-between">
            <FaReact />
            <p className="mx-2">React</p>
          </div>
          <div className="flex justify-between">
            <SiNextdotjs />
            <p className="mx-2">NextJS</p>
          </div>
          <div className="flex justify-between">
            <SiDjango />
            <p className="mx-2">Django</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-between">
            <SiTailwindcss />
            <p className="mx-2">TailwindCSS</p>
          </div>
          <div className="flex justify-between">
            <SiBootstrap />
            <p className="mx-2">Bootstrap</p>
          </div>
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
