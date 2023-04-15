import React, { useRef } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout({ pages }: { pages: Array<() => JSX.Element> }) {
  const ref = useRef<HTMLElement>(null)
  const menuArray = [
    "It's Fred",
    "About",
    "Education and Certificates",
    "Skills",
    "Project: Todo",
    "Project: e-shop",
  ]
  return (
    <>
      <Navbar menuArray={menuArray} reference={ref} />
      <Sidebar />

      <main
        ref={ref}
        className="snap-y snap-mandatory w-screen h-screen overflow-auto"
        onScroll={() => {
          document.querySelector("#certifications")!.className =
            "hidden top-0 left-0 w-screen h-screen bg-black/80"
          document.querySelector("#todo")!.className =
            "hidden top-0 left-0 w-screen h-screen bg-black/80"
          document.querySelector("#shop")!.className =
            "hidden top-0 left-0 w-screen h-screen bg-black/80"
        }}
      >
        {pages.map((page) => (
          <div className="w-full h-full shrink-0 snap-start relative overflow-auto">
            {page()}
          </div>
        ))}
      </main>
    </>
  )
}
