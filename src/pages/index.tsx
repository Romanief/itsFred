import React from "react"
import Head from "next/head"

import Layout from "@/components/Layout"
import ItsFred from "@/components/ItsFred"
import About from "@/components/About"
import Education from "@/components/Education"
import Todo from "@/components/ProjecTodo"
import Skills from "@/components/Skills"
import Shop from "@/components/ProjectShop"
import Contact from "@/components/Contact"

export default function Home() {
  const requestRef = React.useRef<number>()

  const animate = (time: number) => {
    requestRef.current = requestAnimationFrame(animate)

    const currentValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--gradient-size")

    if (parseInt(currentValue) === 900) {
      return
    }

    document?.documentElement.style.setProperty(
      "--gradient-size",
      String(parseInt(currentValue) + 1) + "px"
    )
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current!)
  }, [])

  return (
    <>
      <Head>
        <title>It's Fred</title>
        <meta name="description" content="Welcome to my personal website" />
        {/* TODO: REFERENCE ICON */}
        <link rel="icon" href="/f.png" />
      </Head>

      <Layout
        pages={[ItsFred, About, Education, Skills, Todo, Shop, Contact]}
      />
    </>
  )
}
