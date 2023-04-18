import React from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function Navbar({
  menuArray,
  reference,
}: {
  menuArray: Array<string>
  reference: React.RefObject<HTMLElement>
}) {
  return (
    <>
      <div
        id="navbar"
        className="transition fixed h-screen w-72 -translate-x-72 z-50 bg-black/80"
      >
        <div className="flex flex-col h-full justify-evenly -translate-y-20 text-3xl pl-9">
          <AiOutlineClose
            className="md:translate-y-10 translate-x-40 cursor-pointer translate-y-8"
            onClick={() => {
              document.querySelector("#navbar")!.className =
                "transition fixed h-screen w-72 -translate-x-72 z-50 bg-black"
            }}
          />
          {menuArray.map((x, i) => {
            return (
              <div
                key={i}
                className="text-white hover:text-yellow-600 hover:font-bold cursor-pointer"
                onClick={() => {
                  reference.current?.scrollTo({
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
      <AiOutlineMenu
        className="text-3xl fixed md:top-10 top-5 left-5 hover:cursor-pointer z-40"
        onClick={() => {
          console.log("click")
          document.querySelector("#navbar")!.className =
            "transition fixed h-screen w-72 translate-x-0 z-50 bg-black/80 "
        }}
      />
    </>
  )
}

export default Navbar

/* 
      

      */
