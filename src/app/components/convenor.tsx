import Card from "./card";

const teamData = [
  { name: "John Doe", designation: "Developer", img: "/images/john.jpg" },
  { name: "Jane Smith", designation: "Designer", img: "/images/jane.jpg" },
  {
    name: "Mike Brown",
    designation: "Project Manager",
    img: "/images/mike.jpg",
  },
  { name: "Emily White", designation: "QA Engineer", img: "/images/emily.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r p-8 flex flex-col items-center">
      <div className="w-full text-center mb-12">
        <h1 className="md:text-7xl text-5xl font-bold">Convenors</h1>
      </div>

      <section className="flex md:flex-row flex-col gap-16">
        <Card
          name={teamData[0].name}
          designation={teamData[0].designation}
          img={teamData[0].img}
        />
        <Card
          name={teamData[0].name}
          designation={teamData[0].designation}
          img={teamData[0].img}
        />
        <Card
          name={teamData[0].name}
          designation={teamData[0].designation}
          img={teamData[0].img}
        />
        <Card
          name={teamData[0].name}
          designation={teamData[0].designation}
          img={teamData[0].img}
        />
      </section>
    </div>
  );
}
