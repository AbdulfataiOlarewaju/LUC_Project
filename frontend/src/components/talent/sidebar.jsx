import {
  LayoutDashboard,
  Folder,
  BookOpen,
  MessageSquare,
  Trophy,
  Settings,
  Sparkles,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Sheet, SheetContent } from "../ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logout, logoutUser } from "@/store/auth";
import { toast } from "sonner";

const menuItems = [
  { id: "dashboard", label: "Dashboard", path: "/talent/dashboard", icon: LayoutDashboard },
  { id: "portfolio", label: "My Portfolio", path: "/talent/portfolio", icon: Folder },
  { id: "logs", label: "Learning Logs", path: "/talent/logs", icon: BookOpen },
  { id: "messages", label: "Messages", path: "/talent/messages", icon: MessageSquare },
  { id: "competitions", label: "Competitions", path: "/talent/competitions", icon: Trophy },
  { id: "settings", label: "Settings", path: "/talent/settings", icon: Settings },
];



function SidebarContent({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { refreshToken } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    if (refreshToken) {
      await dispatch(logoutUser(refreshToken)).unwrap().catch(() => {
        // ignore logout API error and still clear local state
          toast.message("Logged out successfully");
      });
    }

    dispatch(logout());
    navigate("/talent/sign-in");
    if (setOpen) setOpen(false);
  };

  return (
    <div className="flex flex-col h-full justify-between bg-white">
      
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3 px-5 py-5">
           <div 
            className="p-2 bg-blue-800 rounded-md text-white"
            
          >
            <GraduationCap className="h-6 w-6" />
          </div>
           <span 
            className="font-bold text-2xl text-black"
           
          >
            LUC
          </span>
        </div>
       

        {/* MENU */}
        <nav className="mt-2 flex flex-col gap-3 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setOpen && setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all text-sm
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-800 font-medium"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                <Icon className="w-4 h-4 font-medium" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="px-4 pb-5 border-t pt-4">
         <div className="flex items-center gap-3">
       {/* AVATAR */}
        <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white font-semibold">
          <Avatar className="cursor-pointer ">
            <AvatarFallback className="font-bold bg-orange-200">
                A
              {/* {user?.userName[0].toUpperCase() +
                user?.userName.slice(1).toUpperCase().split(" ")[0][0]} */}
            </AvatarFallback>
          </Avatar>
        </div>
      <div>
        <p className="text-sm font-medium">Alex Johnson</p>
        <p className="text-xs text-slate-500">Verified Talent</p>
      </div>
    </div>
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 mt-4 px-4 py-2.5 rounded-lg cursor-pointer text-sm text-blue-800 hover:bg-slate-100"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-bold">Log Out</span>
        </div>
      </div>
    </div>
  );
}

function TalentSidebar({ open, setOpen }) {
  return (
    <Fragment>
      {/* MOBILE */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0 border-r bg-white">
          <SidebarContent setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* DESKTOP */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-white">
        <SidebarContent />
      </aside>
    </Fragment>
  );
}

export default TalentSidebar;