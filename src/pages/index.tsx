import React from "react"
import Head from "next/head"
import { throttle } from "lodash"

import Layout from "@/components/Layout"
import ItsFred from "@/components/ItsFred"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import More from "@/components/More"

export default function Home() {
  const requestRef = React.useRef<number>()

  const animate = (time: number) => {
    const currentValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--gradient-size")

    document?.documentElement.style.setProperty(
      "--gradient-size",
      String(parseInt(currentValue) - 1) + "px"
    )
    setTimeout(
      () => (requestRef.current = requestAnimationFrame(animate)),
      1000 / 25
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

      <Layout pages={[ItsFred, About, Skills, Projects, More]} />
    </>
  )
}
