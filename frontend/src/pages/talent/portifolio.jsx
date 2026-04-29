import TalentSidebar from "@/components/talent/sidebar";
import {  Menu } from "lucide-react";
import { useState } from "react";
import TalentPortfolio from "@/components/talent/portifolio";
import { Button } from "@/components/ui/button";


function Portifolio() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return ( 
           <div className="flex min-h-screen ">
      {/* sidebar */}

      <TalentSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <main className="flex flex-1 flex-col lg:w-full w-screen">
        <header className="w-full h-16 bg-white flex items-center justify-between px-6 border-b">

          {/* RIGHT (Mobile menu only) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpenSidebar(true)}
              className="p-2 rounded-md hover:bg-slate-100"
            >
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
          </div>
          {/* HEADER */}
           <div>
                    <h1 className="text-xl font-semibold text-slate-800">
                      My Portfolio
                    </h1>
                  </div>
          
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer">
                    + Add New Project
                  </Button>
          
          
        </header>

        <div className="flex-1 p-6 bg-slate-50">
          <TalentPortfolio />
        </div>
      </main>
    </div>
     );
}

export default Portifolio;