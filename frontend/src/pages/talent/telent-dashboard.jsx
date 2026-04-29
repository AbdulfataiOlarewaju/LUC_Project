import TalentSidebar from "@/components/talent/sidebar";
import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import TalentDashboardMain from "@/components/talent/dashboard";

function TalentDashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  return (
    <div className="flex min-h-screen ">
      {/* sidebar */}

      <TalentSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <main className="flex flex-1 flex-col lg:w-full w-screen">
        <header className="w-full h-16 bg-white flex items-center justify-between px-6 border-b md:hidden">
          {/* LEFT (Mobile menu only) */}
          <div className="flex items-center">
            <button
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100"
            >
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 bg-slate-50">
          <TalentDashboardMain />
        </div>
      </main>
    </div>
  );
}

export default TalentDashboard;
