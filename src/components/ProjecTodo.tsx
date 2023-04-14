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
            For this project, I developed a{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              todo list{" "}
            </span>
            app using{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              React{" "}
            </span>
            for the front-end and{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Django{" "}
            </span>
            for the back-end. The app allows users to create and manage a list
            of tasks, and provides features such as due dates, login, and
            registration. I used{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              Django-rest{" "}
            </span>
            framework and{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              {" "}
            </span>
            for authentication.
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
      <Carousel images={images} id={id} />
    </div>
  )
}

export default ProjectTodo

/*       Project: Todo List App Description:  Challenges:  Screenshots: [insert screenshots of the app]
      Note: It's important to highlight the fact that these projects were
      completed independently as part of your personal studies. This can
      demonstrate your motivation and initiative to potential employers. */
