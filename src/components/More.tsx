import React from "react"

function More() {
  return (
    <div className="w-full h-full">
      <div className="absolute w-full text-center mx-auto top-1/3 text-xl sm:text-3xl lg:text-5xl">
        <div>Want to know more about me?</div>
        <a
          className=" cursor-auto"
          href="https://online.flippingbook.com/view/1050276044/"
        >
          See my CV <span className="cursor-pointer text-yellow-600">here</span>
        </a>
      </div>
    </div>
  )
}

export default More
