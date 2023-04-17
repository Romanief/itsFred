import React from "react"

import Carousel from "./Carousel"

function ProjectTodo() {
  const list = ["Project", "ToDo", "List", "App"]
  const id = "todo"
  const images = [
    "/TD0.jpeg",
    "/TD1.jpeg",
    "/TD2.jpeg",
    "/TD3.jpeg",
    "/TD4.jpeg",
    "/TD5.jpeg",
  ]

  return (
    <div className="w-full mx-auto p-5 sm:p-24">
      <div>
        <p className="text-center sm:text-6xl text-xl text-yellow-500 mb-10 pt-5 sm:pt-0">
          {list.map((item) => (
            <span>{item} </span>
          ))}
        </p>
      </div>
      <div className="sm:text-3xl text-md w-full sm:w-3/4 mx-auto">
        <div className="pt-5">
          <p className="mt-5">
            Technology used:{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              React
            </span>
            ,{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Django
            </span>
            ,{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Django-rest
            </span>
            ,{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Simple-JWT
            </span>
            .
          </p>
          <p className="mt-5">
            One of the main challenges I faced was implementing the{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              refresh token{" "}
            </span>
            functionality. I had to conduct extensive research and
            experimentation to{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              develop{" "}
            </span>{" "}
            a clear understanding of how refresh tokens work and how to
            incorporate their functionality into the app.
          </p>
          <p
            className="text-center mt-10"
            onClick={() => {
              document.querySelector(`#${id}`)!.className =
                "fixed top-0 left-0 w-full h-full bg-black/80"
            }}
          >
            Click{" "}
            <span className="font-extrabold text-yellow-500 cursor-pointer">
              here
            </span>{" "}
            to view some screenshot
          </p>
        </div>
      </div>
      <Carousel images={images} />
    </div>
  )
}

export default ProjectTodo

/*       Project: Todo List App Description:  Challenges:  Screenshots: [insert screenshots of the app]
      Note: It's important to highlight the fact that these projects were
      completed independently as part of your personal studies. This can
      demonstrate your motivation and initiative to potential employers. */
