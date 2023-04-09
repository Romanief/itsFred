import React, { useRef } from "react"
import { SlClose } from "react-icons/sl"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

function Carousel({ images, id }: { images: Array<string>; id: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = React.useState<number>(0)
  return (
    <div
      id={id}
      className="hidden top-0 left-0 w-screen h-screen bg-black/80 z-40"
    >
      <div className="absolute w-screen flex flex-row-reverse">
        <div
          onClick={() => {
            document.querySelector(`#${id}`)!.className =
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
  )
}

export default Carousel
