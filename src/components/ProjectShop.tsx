import React from "react"

function ProjectShop() {
  const list = ["Project", "E-Commerce", "App"]
  return (
    <div className="w-full mx-auto p-24">
      <div>
        <p className="text-center text-6xl text-yellow-500 mb-10">
          {list.map((item) => (
            <span className="transition-all hover:text-9xl hover:font-extrabold hover:underline">
              {item}{" "}
            </span>
          ))}
        </p>
      </div>
      <div className="text-3xl w-full sm:w-3/4 mx-auto">
        <div className="pt-5">
          <p className="mt-5">
            For this project, I developed an{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              online store{" "}
            </span>
            using{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Next.js
            </span>
            . My goal was to create a fast and responsive e-commerce platform
            that provided a seamless shopping experience for customers. I
            developed the{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              front-end{" "}
            </span>
            of the website using React and Tailwind CSS.
          </p>
          <p className="mt-5">
            This project made me come out of my comfort zone as I had to learn
            how to work with{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Next.js
            </span>
            , as it was a new framework for me. To overcome this challenge, I
            spent time{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              researching{" "}
            </span>
            and{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              practicing{" "}
            </span>
            with the framework, and also sought advice from more experienced
            developers.
          </p>
          <p>Click here to see a screenshot</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectShop
