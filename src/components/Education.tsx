import React from "react"

import Carousel from "./Carousel"

function Education() {
  const id = "certifications"
  const list = ["Education", "and", "certification"]
  const images: Array<string> = [
    "/CS50X.jpeg",
    "/CS50W.jpeg",
    "/FCCJS.jpeg",
    "/FCCF.jpeg",
  ]

  return (
    <div className="w-full mx-auto p-24 z-10">
      <div>
        <p className="text-center text-7xl text-yellow-500 mb-10">
          {list.map((item) => (
            <span className="transition-all hover:text-9xl hover:font-extrabold hover:underline">
              {item}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="text-3xl sm:w-3/4 mx-auto">
        <p className="mt-5">
          I completed a BSc (Hons) degree in{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            Physiotherapy{" "}
          </span>
          from{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            London South Bank University{" "}
          </span>
          in July 2022, where I gained communication and organizational skills
          that have been invaluable in my professional and personal life.
        </p>
        <p className="mt-5">
          {" "}
          I completed{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            CS50X{" "}
          </span>
          and{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            CS50W{" "}
          </span>
          from Harvard, as well as the FreeCodeCamp{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            Javascript{" "}
          </span>
          course and the Front End{" "}
          <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
            Framework{" "}
          </span>
          course, all while working full-time as a physiotherapist.
        </p>
        <p className="mt-5">
          My ability to multitask and effectively manage my time allowed me to
          successfully balance my studies with my job.
        </p>

        <p
          className="text-center mt-10"
          onClick={() => {
            document.querySelector(`#${id}`)!.className =
              "absolute top-0 left-0 w-screen h-screen bg-black/80"
          }}
        >
          Click{" "}
          <span className="font-extrabold text-yellow-500 cursor-pointer">
            here
          </span>{" "}
          to view my Certifications
        </p>
      </div>
      <Carousel id={id} images={images} />
    </div>
  )
}

export default Education

/* 

      <div
        id="carousel"
        className="hidden top-0 left-0 w-screen h-screen bg-black/80 z-40"
      >
        <div className="absolute w-screen flex flex-row-reverse">
          <div
            onClick={() => {
              document.querySelector("#carousel")!.className =
                "hidden top-0 left-0 w-screen h-screen bg-black/80"
            }}
            className="text-5xl m-10 cursor-pointer"
          >
            <SlClose />
          </div>
        </div>
        <BsArrowLeft
          onClick={() => {
            ref.current?.scrollTo({
              left: window.innerWidth * (count - 1),
              behavior: "smooth",
            })
            if (count > 0) {
              setCount(count - 1)
            }
            console.log(count)
          }}
          className="cursor-pointer hidden lg:block absolute top-1/2 left-40 text-5xl"
        />{" "}
        <BsArrowRight
          onClick={() => {
            ref.current?.scrollTo({
              left: window.innerWidth * (count + 1),
              behavior: "smooth",
            })
            if (count < 3) {
              setCount(count + 1)
              console.log(count)
            }
          }}
          className="cursor-pointer hidden lg:block absolute top-1/2 right-40 text-5xl"
        />
        <div
          ref={ref}
          className="flex snap-x snap-mandatory w-screen overflow-auto"
        >
          {images.map((x) => {
            return (
              <div className="snap-center w-screen shrink-0 pt-40">
                <img className="h-1/2 mx-auto" src={x}></img>
              </div>
            )
          })}
        </div>
      </div>

      */