import React from "react"

function Skills() {
  const list = ["Skills"]
  return (
    <div>
      <div className="w-full mx-auto p-5 sm:p-24">
        <div>
          <p className="text-center text-xl sm:text-7xl text-yellow-500 mb-10 pt-5 sm:pt-0">
            {list.map((item) => (
              <span className="transition-all hover:text-9xl hover:font-extrabold hover:underline">
                {item}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="sm:w-3/4 text-md sm:text-3xl mx-auto">
          <p className="mt-5">
            beginner knowledge of C and Python (Django) with strong basics of{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              JavaScript{" "}
            </span>
            , HTML, and CSS.
          </p>
          <p className="mt-5">
            Along with technical skills, I bring{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              transferable skills{" "}
            </span>
            from my previous career such as time management, organization,
            teamwork, and communication.
          </p>
          <p className="mt-5">
            My interest in front-end development and UX design has led me to
            develop small projects using Next.js, React, and Django.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
