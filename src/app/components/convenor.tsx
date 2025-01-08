import Card from "./components/ui/Card";

const teamData = [
  { name: "John Doe", designation: "Developer" },
  { name: "Jane Smith", designation: "Designer" },
  { name: "Mike Brown", designation: "Project Manager" },
  { name: "Emily White", designation: "QA Engineer" },
  { name: "Chris Green", designation: "Backend Developer" },
  { name: "Anna Black", designation: "Frontend Developer" },
  { name: "Sarah Blue", designation: "DevOps Engineer" },
  { name: "Tom Yellow", designation: "Product Manager" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-purple-900 p-8">
      <h1 className="text-center text-white text-3xl font-bold mb-8">V-NEST Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.map((member, index) => (
          <Card key={index} name={member.name} designation={member.designation} />
        ))}
      </div>
    </div>
  );
}
