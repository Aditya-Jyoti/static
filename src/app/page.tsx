
import Teampage from "./components/convenor"
import About from "./components/About";
import Startup from "./components/startup";
// import Carosal from "./components/carosal"


export default function Home() {
  return (
    <section>
      {/* splash page */}
      <section id="home">
        {/* desktop */}
        <section
          className="min-h-screen w-full bg-cover bg-no-repeat md:flex hidden flex-col font-bold"
          style={{
            backgroundImage: "url(/splash-background.gif)",
            backgroundPosition: "10% 10%",
          }}
        >
          <div className="flex flex-col items-center mt-[8%]">
            <span className="md:text-[8rem] text-[4rem]">V-NEST</span>
            <span className="md:text-[3rem] md:-mt-10 text-[1rem]">
              VIT Chennai Startup and Research Foundation
            </span>
            <span className="md:text-[1.5rem] text-lg">
              koi tagline dalna hai idhar
            </span>
            <a className="flex items-center gap-2 hover:cursor-pointer justify-center mt-4 bg-foreground text-background py-1 md:text-lg text-sm font-bold md:w-[10%] w-[30%] rounded-xl hover:bg-gray-200 transition-colors duration-300">
              know more
            </a>
          </div>
        </section>

        {/* mobile */}
        <section
          className="min-h-screen w-full bg-cover bg-no-repeat md:hidden flex flex-col font-bold"
          style={{
            backgroundImage: "url(/splash-background.gif)",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="p-4 flex justify-between items-center">
            <img src="/vnest-logo.svg" alt="" className="w-24" />
            <img src="/vit-logo.png" alt="" className="w-28" />
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="md:text-[8rem] text-[4rem]">V-NEST</span>
            <span className="md:text-[3rem] md:-mt-10 text-[1rem]">
              VIT Chennai Startup and Research Foundation
            </span>
            <span className="md:text-[1.5rem] text-lg">
              koi tagline dalna hai idhar
            </span>
            <a className="flex items-center gap-2 hover:cursor-pointer justify-center mt-4 bg-foreground text-background py-1 md:text-lg text-sm font-bold md:w-[10%] w-[30%] rounded-xl hover:bg-gray-200 transition-colors duration-300">
              know more
            </a>
          </div>
        </section>
      </section>

      {/* rest of the data */}
      <section className="gradient p-12">
        <About />
        {/* <Carosal/> */}
        <Teampage/>
        <Startup/>
      </section>

    </section>

  );
}
