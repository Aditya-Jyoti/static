export default function About() {
  return (
    <section className="flex flex-col gap-12 mx-auto md:w-[90%]" id="about">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4 ">
          <span className="md:text-7xl text-4xl font-bold">About V-NEST</span>
          <span className="md:text-2xl text-xl font-normal">
            VIT Chennai boasts a vibrant innovation ecosystem through V-NEST VIT
            Chennai Startup and Research Foundation, that supports students,
            faculty and outside entrepreneurs in transforming their ideas into
            viable business. The product portfolios includes Medical devices,
            Drones, Robotics, Green energy etc. Our partners include Startup TN,
            EDII, Startup India with grant assistance. VIT's startup arm fosters
            innovation for commercial products and services. The focus is
            primarily on first-of-its-kind innovations to help them gain
            traction in the market quickly. Within the span of three years,
            V-NEST has provided assistance to nearly 30 companies. It strives to
            create a benchmark in incubation support and bring products to
            market leadership.
          </span>
        </div>
        <img src="/abt-vnest.jpeg" alt="" className="w-[36rem]" />
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <img src="/vitc.jpg" alt="" className="w-[36rem] md:flex hidden" />
        <div className="flex flex-col gap-4">
          <span className="md:text-7xl text-4xl font-bold md:text-right">
            About VIT
          </span>
          <span className="md:text-2xl text-xl font-normal md:text-right">
            VIT Chennai was established in 2010 and has since become a beacon of
            excellence in higher education. Spearheaded by Vice President Dr. G.
            V. Selvam, a pioneering visionary who laid the foundation of VIT
            Chennai, he is an insightful architect of its evergreen campus and
            an ingenious leader whose comprehensive vision and mission have
            shaped its growth. Under his guidance, VIT Chennai has rapidly
            evolved into a hub of innovation and academic distinction. The
            leadership team, including Vice Chancellor Dr. V. S. Kanchana
            Bhaaskaran, Pro Vice Chancellor Dr. T. Thyagarajan and Additional
            Registrar Dr. P. K. Manoharan, drives its mission of delivering
            transformative education and impactful research. Strategically
            located in the capital city of Tamil Nadu, VIT Chennai is a globally
            engaged, competitive, and research-enriched institution .
          </span>
        </div>
        <img src="/vitc.jpg" alt="" className="w-[36rem] flex md:hidden" />
      </div>
    </section>
  );
}
