import TalentLearningLogs from "@/components/talent/learning-logs";
import TalentSidebar from "@/components/talent/sidebar";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


// lucide-react icons
import {
  // Search,
  Plus,
  Menu,
  Search,
} from "lucide-react";
function LearningLog() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [search, setSearch] = useState("");
    return ( 
              <div className="flex min-h-screen ">
      

      <TalentSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <main className="flex flex-1 flex-col lg:w-full w-screen">
     <header className="w-full h-16 bg-white flex items-center justify-between px-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-slate-500 hover:text-slate-700"
              onClick={() => setOpenSidebar(true)}
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold text-slate-800">Learning Logs</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <Input
                type="text"
                placeholder="Search logs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-60 h-9 pl-9 bg-slate-100 border-0 rounded-xl text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            <Button className="bg-blue-800 hover:bg-blue-800 text-white h-9 px-4 rounded-md text-sm gap-1.5 cursor-pointer">
              <Plus size={14} />
              New Entry
            </Button>
          </div>
        </header>

        <div className="flex-1 p-6 bg-slate-50">
          <TalentLearningLogs />
        </div>
      </main>
    </div>
     );
}

export default LearningLog;