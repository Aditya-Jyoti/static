import Card from "@/app/components/ui/card";

const teamData = [
  { name: "John Doe", designation: "Developer", img: "/images/john.jpg" },
  { name: "Jane Smith", designation: "Designer", img: "/images/jane.jpg" },
  { name: "Mike Brown", designation: "Project Manager", img: "/images/mike.jpg" },
  { name: "Emily White", designation: "QA Engineer", img: "/images/emily.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r p-8 flex flex-col items-center">
    
    
        <div className="w-full text-center mb-12">
          <h1 className="text-purple-600 text-3xl font-bold tracking-widest">V-NEST Team</h1>
        </div>


    
      <div className="flex flex-col items-center mb-16">
      
        <div className="flex justify-center mb-4">
          <Card name={teamData[0].name} designation={teamData[0].designation} img={teamData[0].img} />
        </div>
     
        <div className="flex justify-center gap-8 mb-4">
          <Card name={teamData[1].name} designation={teamData[1].designation} img={teamData[1].img} />
          <Card name={teamData[2].name} designation={teamData[2].designation} img={teamData[2].img} />
        </div>
   
        <div className="flex justify-center mb-4">
          <Card name={teamData[3].name} designation={teamData[3].designation} img={teamData[3].img} />
        </div>
      </div>
    </div>
  );
}
