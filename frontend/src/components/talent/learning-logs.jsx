import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import {
  Upload,
  AlignLeft,
  File,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubNiches } from "@/store/talent/niches-slice";







const logs = [
  {
    id: 1,
    side: "right",
    category: "CYBERSECURITY",
    title: "Network Defense Simulation",
    date: "October 24, 2023",
    text: "Successfully mitigated a simulated SQL injection attack today...",
    file : 'Simulation_Repost_pdf'
  },
  {
    id: 2,
    side: "left",
    category: "WEB DEVELOPMENT",
    title: "React State Management",
    date: "October 15, 2023",
    text: "Implemented a complex dashboard using React Hooks...",
  },
  {
    id: 3,
    side: "right",
    category: "DATA SCIENCE",
    title: "Statistical Modeling Project",
    date: "September 28, 2023",
    text: "Completed the analysis on urban traffic patterns...",
  },
];


function NewEntryForm() {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [reflection, setReflection] = useState("");

  return (
    <div className="rounded-2xl bg-blue-950 border border-blue-900 p-6 text-white">
      {/* heading */}
      <div className="flex items-center gap-2 mb-5">
        <AlignLeft size={16} className="text-blue-400" />
        <h3 className="font-semibold text-base">New Reflection Entry</h3>
      </div>

      {/* Date + Category row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold tracking-widest text-blue-300">
            DATE
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white text-slate-800 border-0 h-11 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold tracking-widest text-blue-300">
            SKILL CATEGORY
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-white text-slate-800 border-0 h-11 rounded-lg focus:ring-2 focus:ring-blue-400 w-full">
              <SelectValue placeholder="Cybersecurity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="machine-learning">Machine Learning</SelectItem>
              <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Reflection textarea */}
      <div className="space-y-1.5 mb-5">
        <label className="block text-[10px] font-bold tracking-widest text-blue-300">
          REFLECTION
        </label>
        <Textarea
          placeholder="What did you learn today? Document your growth..."
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          className="bg-white text-slate-800 border-0 rounded-lg h-28 resize-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-400"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Button
          variant="outline"
          className="border border-blue-700 text-blue-200 bg-transparent hover:bg-blue-900 hover:text-white gap-2 h-10"
        >
          <Upload size={13} />
          Attach Evidence (Certificates/Proofs)
        </Button>

        <Button className="bg-blue-800 hover:bg-blue-400 text-white h-10 px-5 font-medium">
          Save Log Entry
        </Button>
      </div>
    </div>
  );
}


function TalentLearningLogs() {
    const { niches, subNichesByNiche , isLoading} = useSelector((state) => state.niches);


const dispatch = useDispatch();


useEffect(()=>{
    dispatch(fetchSubNiches())
},[dispatch])


console.log("subNichesByNiche:", subNichesByNiche);
  return (
    <div className="space-y-8">
      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Growth Journey</h2>
        <p className="text-sm text-slate-500">
          Chronological record of your skill development and academic
          milestones.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 md:flex hidden"></div>

        <div className="space-y-12">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`flex items-center w-full ${
                log.side === "left" ? "md:justify-start justify-center" : "md:justify-end justify-center"
              }`}
            >
              {/* CARD */}
              <Card className="md:w-[46%] rounded-xl shadow-sm border border-slate-200">
                <CardContent className="p-5 space-y-3">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span className="text-blue-600 font-semibold">
                      {log.category}
                    </span>
                    <span>{log.date}</span>
                  </div>

                  <h3 className="font-semibold text-slate-800">{log.title}</h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {log.text}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    {
                        log.file ?
                        <span className=" flex  items-center "><File height={17}/> {log.file}</span> :
                          <span className="text-xs text-slate-400">
                      No evidence attached yet.
                    </span>
                    }
                    <Button variant="outline" size="sm">
                      Attach Evidence
                    </Button>
                  </div>
                </CardContent> 
              </Card>

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow md:flex hidden"></div>
            </div>
          ))}
        </div>
      </div>
      {/* FORM (BOTTOM BLUE SECTION) */}
      <NewEntryForm/>
    </div>
  );
}

export default TalentLearningLogs;
