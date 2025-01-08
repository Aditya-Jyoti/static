export default function About() {
  return (
    <section className="flex flex-col gap-12 mx-auto md:w-[90%]" id="about">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <span className="md:text-7xl text-4xl font-bold">About V-NEST</span>
          <span className="md:text-3xl text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            voluptatem dignissimos id ratione asperiores minus soluta a. Ex,
            voluptatibus blanditiis! Error consectetur animi earum voluptatem
            qui nobis? Molestias eveniet debitis incidunt reprehenderit
            veritatis blanditiis sequi! Officia sed aperiam, corporis fuga
            quidem autem quae magni cupiditate voluptatibus soluta amet nam
            dicta! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio voluptatem dignissimos id ratione asperiores minus soluta
            a. Ex, voluptatibus blanditiis! Error consectetur animi earum
            voluptatem qui nobis? Molestias eveniet debitis incidunt
            reprehenderit
          </span>
        </div>
        <img src="/about1.jpg" alt="" className="w-[36rem]" />
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <img src="/about1.jpg" alt="" className="w-[36rem] md:flex hidden" />
        <div className="flex flex-col gap-4 md:w-[50%]">
          <span className="md:text-7xl text-4xl font-bold md:text-right">
            About VIT
          </span>
          <span className="md:text-3xl text-xl md:text-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            voluptatem dignissimos id ratione asperiores minus soluta a. Ex,
            voluptatibus blanditiis! Error consectetur animi earum voluptatem
            qui nobis? Molestias eveniet debitis incidunt reprehenderit
            veritatis blanditiis sequi! Officia sed aperiam, corporis fuga
            quidem autem quae magni cupiditate voluptatibus soluta amet nam
            dicta! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio voluptatem dignissimos id ratione asperiores minus soluta
            a. Ex, voluptatibus blanditiis! Error consectetur animi earum
            voluptatem qui nobis? Molestias eveniet debitis incidunt
            reprehenderit
          </span>
        </div>
        <img src="/about1.jpg" alt="" className="w-[36rem] flex md:hidden" />
      </div>
    </section>
  );
}
