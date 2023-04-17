import React from "react"
import Carousel from "./Carousel"

function Projects() {
  const list = ["Projects"]
  const shopImages = [
    "/SA0.jpeg",
    "/SA1.jpeg",
    "/SA2.jpeg",
    "/SA3.jpeg",
    "/SA4.jpeg",
  ]
  const todoImages = [
    "/TD0.jpeg",
    "/TD1.jpeg",
    "/TD2.jpeg",
    "/TD3.jpeg",
    "/TD4.jpeg",
    "/TD5.jpeg",
  ]
  return (
    <div className="w-full h-full mx-auto p-5 sm:p-24">
      <div>
        <p className="text-center text-xl sm:text-6xl text-yellow-500 mb-10 pt-0 sm:pt-5">
          {list.map((item) => (
            <span>{item} </span>
          ))}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly text-xl xl:w-3/4 mx-auto -translate-x-20 sm:mt-20">
        <div className="flex flex-col">
          <div className="flex flex-col xl:px-20 pl-20 mb-10">
            <div className="font-bold">Todo App</div>
            <div className="hidden lg:block">
              Technology used: React, Django, Django-rest, SimpleJWT, Tailwind
            </div>
          </div>
          <Carousel images={todoImages} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col xl:px-20 pl-20 mb-10">
            <div className="font-bold">E-commerce App</div>
            <div className="hidden lg:block">
              Technology used: React, Next, Tailwind
            </div>
          </div>
          <Carousel images={shopImages} />
        </div>
      </div>
    </div>
  )
}

export default Projects
