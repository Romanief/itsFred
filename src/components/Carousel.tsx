import React from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

function Carousel({ images }: { images: Array<string> }) {
  const [count, setCount] = React.useState<number>(0)
  return (
    <div className="flex space-between text-5xl">
      <BsArrowLeft
        className={
          count == 0
            ? "shrink-0 mx-5 my-auto hover:text-yellow-600 opacity-0"
            : "shrink-0 mx-5 my-auto hover:text-yellow-600"
        }
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }
        }}
      />
      <img className="xl:w-96 lg:w-72 md:w-60 w-52" src={images[count]} />
      <BsArrowRight
        className={
          count == images.length - 1
            ? "shrink-0 mx-5 my-auto hover:text-yellow-600 opacity-0"
            : "shrink-0 mx-5 my-auto hover:text-yellow-600"
        }
        onClick={() => {
          if (count < images.length - 1) {
            setCount(count + 1)
          }
        }}
      />
    </div>
  )
}

export default Carousel

/* 

 <div id={id} className="hidden top-0 left-0 w-full h-full bg-black/80 z-40">
      <div className="absolute w-full flex flex-row-reverse">
        <div
          onClick={() => {
            document.querySelector(`#${id}`)!.className =
              "hidden top-0 left-0 w-full h-full bg-black/80"
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
            <div className="snap-center w-full shrink-0 pt-40">
              <img className="h-1/2 mx-auto" src={x}></img>
            </div>
          )
        })}
      </div>
    </div>

    */
