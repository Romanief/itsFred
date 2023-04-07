const list = ["5", "things", "you", "should", "know", "about", "me"]

export default function About() {
  return (
    <div className="w-3/4 mx-auto p-24">
      <div>
        <p className="text-center text-5xl text-yellow-500 mb-10">
          {list.map((item) => (
            <span className="transition-all hover:text-7xl hover:font-extrabold hover:underline">
              {item}{" "}
            </span>
          ))}
        </p>
      </div>
      <div className="text-xl">
        <p>Hey you, it's Fred writing here.</p>
        <div>
          <ul>
            <li className="mt-5">
              <p>
                From dancing on stages, through dancing between people, to
                dancing between lines of code.
              </p>
              <p>
                When I was a child I dreamt of become a{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  ballet
                </span>{" "}
                dancer. I trained professionally from age 12 to age 13 in both
                Rome and London
              </p>
            </li>
            <li className="mt-5">
              <p>
                At the beginning of my working career, an injury forced me to
                give up on my dreams, however thanks to my{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  determination{" "}
                </span>
                and{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  work ethics{" "}
                </span>
                , instead of give up I started and completing a degree in
                Physiotherapy
              </p>
            </li>
            <li>
              <p>
                Once graduated I immediately found a job, however in the{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  NHS{" "}
                </span>
                the recruitement process is really slow, leaving me with a few
                months where I was mostly free at home.
              </p>
              <p>
                Having a few people in my life that are software engineers and
                due to my{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  curiosity{" "}
                </span>{" "}
                and my{" "}
              </p>
              <p>
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  philomathical{" "}
                </span>
                personality, I started exploring the concept of programming.
              </p>
            </li>
            <li className="mt-5">
              <p>
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  Critical thinking
                </span>
                ,{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  problem solving
                </span>
                ,{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  logic
                </span>
                , and{" "}
                <span className="text-yellow-500  transition-all hover:text-3xl hover:font-extrabold ">
                  creativity
                </span>
                , are all skills that I always had, and through learning basic
                CS concepts and coding I was able to develop and apply those
                skills into something practical, which made me immediatly fall
                in love with it and wanting to look into it more.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
