import React from "react"
import { MdMenuBook } from "react-icons/md"

function Navbar({
  menuArray,
  reference,
}: {
  menuArray: Array<string>
  reference: React.RefObject<HTMLElement>
}) {
  return (
    <div className="transition fixed h-screen w-72 -translate-x-60 hover:translate-x-0 hover:text-transparent z-20 sm:shadow-2xl shadow-none sm:shadow-black">
      <div className="absolute w-full h-full z-2 bg-black/70 -translate-x-16 sm:-translate-x-0"></div>
      <div className="w-full flex justify-end p-3 sm:ml-10 z-3">
        <p className="sm:text-5xl text-3xl z-10">
          <MdMenuBook />
        </p>
      </div>

      <div className="flex flex-col h-full justify-evenly -translate-y-20 text-3xl pl-9 z-3">
        {menuArray.map((x, i) => {
          return (
            <div
              key={i}
              className="text-white hover:text-yellow-500 hover:font-bold"
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
  )
}

export default Navbar
