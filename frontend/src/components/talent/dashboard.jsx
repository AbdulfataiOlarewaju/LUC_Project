import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Upload, PlusCircle } from "lucide-react";

function TalentDashboardMain() {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 min-h-screen bg-[#f5f7fb]">
      {/* ===== TOP PROFILE BANNER ===== */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            {/* LEFT */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-200 flex-shrink-0"></div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-semibold truncate">Alex Johnson</h2>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex-shrink-0">
                    Verified
                  </span>
                </div>

                <p className="text-sm text-slate-500 truncate sm:truncate-none">
                  Loyola University Chicago
                </p>

                <p className="text-sm text-blue-600 truncate sm:truncate-none">
                  Computer Science & Visual Design
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto sm:self-end">
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 flex-1 sm:flex-none py-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Upload New Project
              </Button>

              <Button variant="outline" className="flex items-center gap-2 flex-1 sm:flex-none py-2 cursor-pointer">
                <PlusCircle className="w-4 h-4" />
                Join Competition
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Approved */}
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-slate-500">Approved Projects</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">12</h2>
            <p className="text-xs text-green-500 mt-1">+15%</p>
          </CardContent>
        </Card>

        {/* Views */}
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-slate-500">Portfolio Views</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">1,240</h2>
            <p className="text-xs text-green-500 mt-1">+22%</p>
          </CardContent>
        </Card>

        {/* Inquiries */}
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-slate-500">Client Inquiries</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">8</h2>
            <p className="text-xs text-green-500 mt-1">+5%</p>
          </CardContent>
        </Card>

        {/* Talent Score */}
        <Card className="rounded-xl bg-blue-700 text-white shadow-sm">
          <CardContent className="p-5 flex flex-col justify-center items-center text-center">
            <Trophy className="mb-2 w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-xs sm:text-sm opacity-80">Talent Score</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">942</h2>
            <p className="text-xs opacity-80 mt-1">Top 5% in University</p>
          </CardContent>
        </Card>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEARNING LOG */}
        <Card className="lg:col-span-2 rounded-xl shadow-sm">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 sm:gap-0 mb-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-base sm:text-lg">Learning Log Maturation</h3>
                <p className="text-xs text-slate-500">
                  Weekly progress in knowledge retention
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl sm:text-2xl font-bold text-blue-600">85%</p>
                <p className="text-xs text-green-500">+12% increase</p>
              </div>
            </div>

            {/* Fake chart */}
            <div className="flex items-end gap-2 sm:gap-4 h-28 sm:h-40 overflow-hidden">
              <div className="w-4 sm:w-6 flex-1 bg-slate-200 rounded h-[40%] sm:h-16"></div>
              <div className="w-4 sm:w-6 flex-1 bg-slate-300 rounded h-[60%] sm:h-28"></div>
              <div className="w-4 sm:w-6 flex-1 bg-blue-600 rounded h-[85%] sm:h-36"></div>
              <div className="w-4 sm:w-6 flex-1 bg-slate-300 rounded h-[45%] sm:h-20"></div>
              <div className="w-4 sm:w-6 flex-1 bg-slate-300 rounded h-[70%] sm:h-30"></div>
              <div className="w-4 sm:w-6 flex-1 bg-slate-200 rounded h-[50%] sm:h-18"></div>
              <div className="w-4 sm:w-6 flex-1 bg-slate-200 rounded h-[30%] sm:h-10"></div>
            </div>

            {/* Days */}
            <div className="flex justify-between text-xs text-slate-400 mt-2 sm:mt-3">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>
          </CardContent>
        </Card>

        {/* RECENT ACTIVITY */}
        <Card className="rounded-xl shadow-sm">
          <CardContent className="p-4 sm:p-5">
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Recent Activity</h3>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="hover:bg-slate-50 p-2 rounded-lg -m-2 transition-colors">
                <p className="font-medium text-slate-900">Project Approved</p>
                <p className="text-slate-500 mt-1 line-clamp-1">
                  Modern Web Design Kit approved for viewing
                </p>
                <p className="text-slate-400 mt-1">2 hours ago</p>
              </div>

              <div className="hover:bg-slate-50 p-2 rounded-lg -m-2 transition-colors">
                <p className="font-medium text-slate-900">Log Matured</p>
                <p className="text-slate-500 mt-1 line-clamp-1">
                  Week 4 React moved to "Mastered"
                </p>
                <p className="text-slate-400 mt-1">5 hours ago</p>
              </div>

              <div className="hover:bg-slate-50 p-2 rounded-lg -m-2 transition-colors">
                <p className="font-medium text-slate-900">New Competition</p>
                <p className="text-slate-500 mt-1 line-clamp-1">
                  Joined LUC Innovation Week 2024
                </p>
                <p className="text-slate-400 mt-1">Yesterday</p>
              </div>

              <div className="hover:bg-slate-50 p-2 rounded-lg -m-2 transition-colors">
                <p className="font-medium text-slate-900">Profile Viewed</p>
                <p className="text-slate-500 mt-1 line-clamp-1">
                  Employer viewed your portfolio
                </p>
                <p className="text-slate-400 mt-1">2 days ago</p>
              </div>

              <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm mt-3 w-full text-left">
                View All Activity →
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TalentDashboardMain;
