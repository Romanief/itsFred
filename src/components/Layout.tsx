import React, { useRef } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout({ pages }: { pages: Array<() => JSX.Element> }) {
  const ref = useRef<HTMLElement>(null)
  const menuArray = ["It's Fred", "About", "Skills", "Projects", "CV"]
  return (
    <>
      <Navbar menuArray={menuArray} reference={ref} />
      <Sidebar />

      <main
        ref={ref}
        className="snap-y snap-mandatory w-screen h-screen overflow-auto"
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
