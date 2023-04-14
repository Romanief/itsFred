import React from "react"

import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Contact() {
  const list = ["Contact", "me"]
  return (
    <div className="w-full mx-auto p-5 sm:p-24">
      <div>
        <p className="text-center text-xl sm:text-6xl text-yellow-500 mb-10 pt-5 sm:pt-0">
          {list.map((item) => (
            <span className="transition-all sm:hover:text-9xl hover:font-extrabold hover:underline">
              {item}{" "}
            </span>
          ))}
        </p>
      </div>
      <div className="text-3xl w-full md:w-3/4 sm:mx-auto my-10 flex flex-col  xl:ml-80">
        <div className="flex my-10 lg:text-5xl sm:text-xl text-lg">
          <BsTelephone />
          <div className="mx-5 hover:underline">7584 837 509</div>
        </div>
        <div className="flex my-10 lg:text-5xl sm:text-xl text-lg">
          <AiOutlineMail className="shrink-0" />
          <div className="mx-5 hover:underline">
            federicoromaniello@outlook.com
          </div>
        </div>
        <div className="flex my-10 lg:text-5xl sm:text-xl text-lg">
          <AiFillLinkedin />
          <div className="mx-5 hover:text-yellow-500 hover:underline">
            <a href="https://www.linkedin.com/in/federico-romaniello-39771a254/">
              Federico Romaniello
            </a>
          </div>
        </div>
        <div className="flex my-10 lg:text-5xl sm:text-xl text-lg">
          <AiFillGithub />
          <div className="mx-5 hover:text-yellow-500 hover:underline">
            <a href="https://github.com/Romanief?tab=repositories">Romanief</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
