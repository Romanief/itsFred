export default function ItsFred() {
  return (
    <>
      <div className="absolute -top-[415px] hover:top-0 right-0 z-0 transition-all">
        <div className="transition mr-10 p-3 flex flex-col-reverse hover:text-transparent">
          <p className="text-4xl mt-10 animate-bounce">Oh, this is me btw.</p>
          <div>
            <img
              className="h-96 opacity-100 rounded-3xl"
              src="/mebtw.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="mx-auto w-1/3 flex flex-col h-full">
          <div className="h-1/5"></div>
          <div className="text-9xl">
            <p>Hey,</p>
            <p>
              It's{" "}
              <span className="text-yellow-500 font-brushscript">Fred</span>.
            </p>
          </div>

          <p className="my-3 text-2xl">Start scrolling and get to know me.</p>
        </div>
      </div>
    </>
  )
}
