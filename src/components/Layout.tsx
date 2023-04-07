import React, { useRef } from "react"
import { MdMenuBook } from "react-icons/md"

export default function Layout({ pages }: { pages: Array<() => JSX.Element> }) {
  const ref = useRef<HTMLElement>(null)
  const menuArray = [
    "It's Fred",
    "About",
    "The physio era",
    "The dev era",
    "CS50",
    "FreeCodeCamp",
    "My projects",
  ]
  return (
    <>
      <div className="transition fixed h-screen w-72 -translate-x-60 hover:translate-x-0 hover:text-transparent z-10 shadow-2xl shadow-black">
        <div className="absolute w-full h-full z-2 blur bg-black/70"></div>
        <div className="w-full flex justify-end p-3 ml-10 z-3">
          <p className="text-5xl z-10">
            <MdMenuBook />
          </p>
        </div>

        <div className="flex flex-col h-full justify-evenly -translate-y-20 text-3xl pl-9 z-3">
          {menuArray.map((x, i) => {
            return (
              <div
                className="text-white hover:text-yellow-500 hover:font-bold"
                onClick={() => {
                  ref.current?.scrollTo({
                    top: window.innerHeight * i,
                    behavior: "smooth",
                  })
                }}
              >
                {x}
              </div>
            )
          })}
        </div>
      </div>

      <main
        ref={ref}
        className="snap-y snap-mandatory w-screen h-screen overflow-auto"
      >
        {pages.map((page) => (
          <div className="w-full h-full shrink-0 snap-start relative overflow-hidden">
            {page()}
          </div>
        ))}
      </main>
    </>
  )
}
