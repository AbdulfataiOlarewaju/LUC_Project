import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";


const projects = [
  {
    title: "AI Ethics in Modern...",
    desc: "A comprehensive research paper exploring bias in large...",
    status: "Approved",
    date: "MAR 2024",
    color: "green",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Smart City IoT...",
    desc: "Prototype of a sensor-based waste management system...",
    status: "Under Review",
    date: "FEB 2024",
    color: "yellow",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Sustainable Fashion...",
    desc: "User experience case study for ethical fashion...",
    status: "Revision Needed",
    date: "JAN 2024",
    color: "red",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
  },
  {
    title: "Community Garden...",
    desc: "Documenting the development of a local permaculture...",
    status: "Approved",
    date: "DEC 2023",
    color: "green",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Robotics Competition...",
    desc: "Detailed breakdown of the winning autonomous robot...",
    status: "Approved",
    date: "NOV 2023",
    color: "green",
    image: "https://images.unsplash.com/photo-1581091870627-3f1f0c6f61c5",
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  "Under Review": "bg-yellow-100 text-yellow-700",
  "Revision Needed": "bg-red-100 text-red-600",
};

function TalentPortfolio() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            My Portfolio
          </h1>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer">
          + Add New Project
        </Button>
      </div>

      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Academic Showcase
        </h2>
        <p className="text-sm text-slate-500 mt-1 max-w-xl">
          Manage your verified academic projects, professional internships,
          and creative achievements for employer visibility.
        </p>
      </div>

      {/* TABS */}
      <div className="flex md:gap-6 gap-3 border-b text-sm">
        <Button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium cursor-pointer bg-transparent p-0 border-none">
          All Projects
        </Button>
        <Button className="text-slate-500 hover:text-slate-800 cursor-pointer bg-transparent p-0 border-none">
          Approved
        </Button>
        <Button className="text-slate-500 hover:text-slate-800 cursor-pointer bg-transparent p-0 border-none">
          Under Review
        </Button>
        <Button className="text-slate-500 hover:text-slate-800 cursor-pointer bg-transparent p-0 border-none">
          Revisions
        </Button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            {/* IMAGE */}
            <div className="h-32 w-full bg-slate-200 overflow-hidden">
              <img
                src={project.image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <CardContent className="p-4 space-y-3">
              {/* STATUS */}
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[project.status]}`}
              >
                ● {project.status}
              </span>

              {/* TITLE */}
              <h3 className="font-semibold text-sm text-slate-800 mt-3">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-xs text-slate-500 line-clamp-2">
                {project.desc}
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center text-xs text-slate-400 pt-2">
                <span>{project.date}</span>
                <span className="text-blue-600 cursor-pointer">→</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* ADD NEW CARD */}
        <div className="flex items-center justify-center border-2 border-dashed border-blue-300 rounded-xl h-[260px] cursor-pointer hover:bg-blue-50 transition">
          <div className="flex flex-col items-center text-blue-500">
            <Plus className="w-6 h-6 mb-2" />
            <p className="text-sm font-medium">New Project Entry</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPortfolio;