const list = ["About"]

export default function About() {
  return (
    <div className="w-full mx-auto p-5 h-full">
      <div>
        <p className="text-center text-xl sm:text-6xl text-yellow-600 mb-10 pt-5">
          {list.map((item) => (
            <span>{item} </span>
          ))}
        </p>
      </div>
      <div className="sm:text-2xl text-md w-full sm:w-3/4 sm:mx-auto  h-3/4">
        <div className="flex flex-col justify-evenly h-full">
          <p className="mt-5">
            I pursued professional{" "}
            <span className="text-yellow-600  transition-all hover:font-extrabold">
              ballet
            </span>{" "}
            training from the age of 12 to 19 in Rome and London, fuelled by my
            childhood dream of becoming a ballet dancer. However, an injury
            early on in my career forced me to reevaluate my path.
          </p>
          <p className="mt-5">
            Instead of giving up, I completed a degree in{" "}
            <span className="text-yellow-600  transition-all hover:font-extrabold">
              Physiotherapy
            </span>{" "}
            and secured a job in the NHS. During my free time, I began to
            explore{" "}
            <span className="text-yellow-600  transition-all hover:font-extrabold">
              programming
            </span>{" "}
            concepts with the help of some software engineer friends.
          </p>
          <p className="mt-5">
            Thanks to my inquisitive nature, I found that critical thinking,
            problem-solving, logic, and creativity were all skills I had that I
            could apply to code, leading me to fall in love with programming and
            continue exploring the field.
          </p>
        </div>
      </div>
    </div>
  )
}

/* I come from a background in physiotherapy where I honed valuable skills such as time management, organization, and communication. While I enjoyed my previous work, my passion for technology and design led me to explore the world of front-end development. I've found that my previous experience has been invaluable in my new career - my time management skills help me to work efficiently and meet deadlines, my organization skills enable me to stay on top of multiple projects, and my communication skills allow me to work effectively with diverse teams. I'm excited to continue to develop my problem-solving and attention to detail skills in the world of front-end development, and I can't wait to see where this journey takes me. */
