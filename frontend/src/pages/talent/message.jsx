import TalentSidebar from "@/components/talent/sidebar";
import { useState } from "react";
import TalentMeassage from "@/components/talent/massage";
import { Menu, Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Message() {
       const [openSidebar, setOpenSidebar] = useState(false);
    return ( 
              <div className="flex min-h-screen ">
      {/* sidebar */}

      <TalentSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <main className="flex flex-1 flex-col lg:w-full w-screen">
       <header className="w-full h-16 bg-white flex items-center justify-between px-6 border-b">

  {/* LEFT */}
  <div className="flex items-center gap-4">
    <button
      onClick={() => setOpenSidebar(true)}
      className="lg:hidden p-2 rounded-md hover:bg-slate-100"
    >
      <Menu className="w-5 h-5 text-slate-600" />
    </button>

    <h1 className="text-lg font-semibold text-slate-800">
      Messages
    </h1>
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-4">

    {/* SEARCH */}
    <div className="relative hidden md:block">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search conversations..."
        className="w-64 h-10 pl-9 pr-4 rounded-xl bg-slate-100 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* DIVIDER */}
    <div className="h-6 w-px bg-slate-200 hidden md:block" />

    {/* NOTIFICATION */}
    <Bell className="w-5 h-5 text-slate-600 cursor-pointer" />

    {/* USER */}
    <div className="flex items-center gap-2 cursor-pointer">
      <Avatar>
        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
          AJ
        </AvatarFallback>
      </Avatar>

      <div className="hidden md:block">
        <p className="text-sm font-medium text-slate-700">
          Alex Johnson
        </p>
        <p className="text-xs text-slate-400">
          Premium Student
        </p>
      </div>
    </div>
  </div>
</header>

        <div className="flex-1  bg-slate-50">
          <TalentMeassage />
        </div>
      </main>
    </div>
     );
}

export default Message;