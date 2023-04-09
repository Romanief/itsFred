import React from "react"

function Skills() {
  const list = ["Skills"]
  return (
    <div>
      <div className="w-full mx-auto p-24 z-10">
        <div>
          <p className="text-center text-7xl text-yellow-500 mb-10">
            {list.map((item) => (
              <span className="transition-all hover:text-9xl hover:font-extrabold hover:underline">
                {item}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="sm:w-3/4 text-3xl mx-auto">
          <p className="mt-5">
            As a{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              junior{" "}
            </span>
            front-end developer, I am{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              proficient{" "}
            </span>
            in C, Python, JavaScript, HTML, and CSS. I also, through{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              projects{" "}
            </span>
            and{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              self study{" "}
            </span>
            have experience with React, Next.js, Django, Tailwind CSS, and
            Bootstrap.
          </p>
          <p className="mt-5">
            Along with technical skills, I bring{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              transferable skills{" "}
            </span>
            from my previous career in physiotherapy, such as time management,
            organization, teamwork, and communication.
          </p>
          <p className="mt-5">
            My interest in front-end development and UX design has led me to
            develop small projects using Next.js, React, and Django. I'm{" "}
            <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold">
              dedicated{" "}
            </span>
            to continuing my growth as a developer and am excited to learn new
            technologies and best practices in a fast-paced, collaborative
            environment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
