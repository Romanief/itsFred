import React from "react"
import { BsTelephone } from "react-icons/bs"
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillContacts,
  AiOutlineClose,
} from "react-icons/ai"

function Sidebar() {
  return (
    <>
      <div className="fixed hidden h-screen w-96 -right-72 sm:flex flex-col justify-around text-xl z-50">
        <div className="flex p-5 hover:-translate-x-80 transition text-transparent hover:text-gray-200 hover:bg-black/80 w-96">
          <AiOutlineMail className="text-gray-200 shrink-0" />
          <p className="ml-14 ">federicoromaniellowork@outlook.com</p>
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

      <div
        id="smallSideBar"
        className="sm:hidden fixed h-screen w-96 bg-black flex flex-col justify-start text-xl z-50 translate-x-96 transition"
      >
        <AiFillContacts
          className=" -translate-x-14 shrink-0 text-4xl mt-3"
          onClick={() =>
            (document.querySelector("#smallSideBar")!.className =
              "sm:hidden fixed h-screen w-96 bg-black flex flex-col justify-start text-xl z-50 transition")
          }
        />

        <div className="flex flex-col justify-around h-full text-lg">
          <AiOutlineClose
            className="-translate-y-14 translate-x-3 text-3xl"
            onClick={() =>
              (document.querySelector("#smallSideBar")!.className =
                "sm:hidden fixed h-screen w-96 bg-black flex flex-col justify-start text-xl z-50 translate-x-96 transition")
            }
          />
          <div className="flex p-5 transition w-96">
            <AiOutlineMail className="text-gray-200 shrink-0" />
            <p className="ml-5">federicoromaniellowork@outlook.com</p>
          </div>
          <div className="flex p-5 transition ">
            <BsTelephone className="text-gray-200" />
            <p className="ml-5">+44 7584 837 509</p>
          </div>
          <div className="flex p-5 transition ">
            <AiFillLinkedin className="text-gray-200" />
            <p className="ml-5">
              <a href="https://www.linkedin.com/in/federico-romaniello-39771a254/">
                Federico Romaniello
              </a>
            </p>
          </div>
          <div className="flex p-5 transition ">
            <AiFillGithub className="text-gray-200" />
            <p className="ml-5">
              <a href="https://github.com/Romanief?tab=repositories">
                Romanief
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
