export default function ItsFred() {
  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center mx-auto my-auto sm:top-10 lg:top-1/4">
        <div className="h-[20vw] w-[20vw] mr-20 mt-10">
          <div className="absolute hidden md:block bg-potrait h-[20vw] w-[20vw] min-h-40 rounded-full bg-contain transition"></div>
          <div className="absolute hidden md:block bg-ballet h-[20vw] w-[20vw]  min-w-40 min-h-40 rounded-full bg-contain transition z-50 opacity-0 hover:opacity-100"></div>
        </div>

        <div className="md:left-1/2 md:top-1/4 md:w-1/3 flex flex-col md:text-left text-center">
          <div className="h-1/5"></div>
          <div className="text-9xl">
            <p>Hey,</p>
            <p>
              It's{" "}
              <span className="text-yellow-500 font-brushscript">Fred</span>.
            </p>
          </div>

          <p className="my-3 text-2xl p-5">
            Start scrolling and get to know me.
          </p>
        </div>
      </div>
    </>
  )
}
