export default function ItsFred() {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row justify-center mx-auto my-auto top-10 lg:top-1/4 lg:right-80">
        <div className="md:h-[20vw] md:w-[20vw] h-40 w-40  lg:mr-20 lg:mt-10 mx-auto">
          <div className="absolute bg-potrait md:h-[20vw] md:w-[20vw] h-40 w-40 rounded-full bg-contain transition"></div>
          <div className="absolute bg-ballet md:h-[20vw] md:w-[20vw] h-40 w-40 rounded-full bg-contain transition z-40 opacity-0 hover:opacity-100"></div>
        </div>

        <div className="lg:top-1/4 lg:w-1/3 flex flex-col lg:text-left text-center">
          <div className="h-1/5"></div>
          <div className="text-9xl">
            <p>Hey,</p>
            <p>
              It's{" "}
              <span className="text-yellow-600 font-brushscript">Fred</span>.
            </p>
          </div>

          <p className="my-3 text-2xl p-5">
            Hover on the picture to see me dancing.
          </p>
        </div>
      </div>
    </>
  )
}
