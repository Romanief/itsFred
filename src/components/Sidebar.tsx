import React from "react"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Sidebar() {
  return (
    <div className="fixed h-screen w-96 -right-72 flex flex-col justify-around text-xl z-50">
      <div className="flex p-5 hover:-translate-x-80 transition text-transparent hover:text-gray-200 hover:bg-black/80 w-96">
        <AiOutlineMail className="text-gray-200 shrink-0" />
        <p className="ml-14 ">federicoromaniellowork@outlook</p>
      </div>
      <div className="flex p-5 hover:-translate-x-80 transition text-transparent hover:text-gray-200  hover:bg-black/80">
        <BsTelephone className="text-gray-200" />
        <p className="ml-14">+44 7584 837 509</p>
      </div>
      <div className="flex p-5 hover:-translate-x-80 transition text-transparent hover:text-gray-200  hover:bg-black/80">
        <AiFillLinkedin className="text-gray-200" />
        <p className="ml-14">
          <a href="https://www.linkedin.com/in/federico-romaniello-39771a254/">
            Federico Romaniello
          </a>
        </p>
      </div>
      <div className="flex p-5 hover:-translate-x-80 transition text-transparent hover:text-gray-200  hover:bg-black/80">
        <AiFillGithub className="text-gray-200" />
        <p className="ml-14">
          <a href="https://github.com/Romanief?tab=repositories">Romanief</a>
        </p>
      </div>
    </div>
  )
}

export default Sidebar
