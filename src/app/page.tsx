import Teampage from "./components/convenor";
import About from "./components/About";
import Startup from "./components/startup";
import ImageCarousel from "./components/carosal";

import Image from "next/image";

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
              we nurture you to fly high
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
              we nurture you to fly high
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
        <ImageCarousel
          images={[
            "IMG_4808.jpg",
            "IMG_4810.jpg",
            "IMG_4818.jpg",
            "IMG_4839.JPG",
            "IMG_4844.JPG",
            "IMG_4848.JPG",
            "IMG_4850.JPG",
            "IMG_4854.JPG",
            "IMG_4863.JPG",
            "IMG_4865.JPG",
            "IMG_4867.JPG",
            "IMG_4878.JPG",
          ]}
        />
        <Teampage />

        <div className="flex flex-col items-center w-full justify-center">
          <h1 className="md:text-7xl text-5xl font-bold flex w-full items-center justify-center md:-mb-24 mt-12">
            Benefits
          </h1>
          <Image src="/graph.png" alt="graph" width={1600} height={500} className="md:flex hidden" />
          <Image src="/ben2.png" alt="graph" width={1600} height={1600}  className="md:hidden flex h-full my-8"/>
        </div>

        <div className="md:-mt-16">
          <Startup />
        </div>
      </section>

      <footer className="w-full flex flex-col items-center justify-center font-bold py-16">
        <span className="text-2xl">&copy; V-NEST 2025-26</span>
        <span className="text-sm font-normal">
          made with love by{" "}
          <a href="https://github.com/computerSocietyVITC/" className="font-semibold" target="_blank">team vnest</a>
        </span>
      </footer>
    </section>
  );
}
