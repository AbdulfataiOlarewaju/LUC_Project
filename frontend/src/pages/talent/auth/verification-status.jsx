import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Bell,
  User,
  Hourglass,
  Check,
  Loader2,
  MoreHorizontal,
  Headphones,
} from "lucide-react";

function VerifiationStatus() {

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 h-16 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-md text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h1 className="font-semibold text-slate-800">TalentPortal</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-100 rounded-md">
            <Bell className="w-5 h-5 text-slate-600" />
          </div>
          <div className="p-2 bg-slate-100 rounded-md">
            <User className="w-5 h-5 text-slate-600" />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        {/* STATUS CARD */}
        <div className="bg-white border rounded-xl shadow-sm p-10 text-center relative">

          {/* TOP BORDER */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-yellow-400 rounded-t-xl"></div>

          {/* ICON */}
          <div className="mx-auto w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
            <Hourglass className="text-yellow-600 w-6 h-6" />
          </div>

          {/* TEXT */}
          <p className="text-xs font-semibold text-yellow-600 mt-4 tracking-wide">
            CURRENT STATUS
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Awaiting Institutional Approval
          </h2>

          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Your account setup is complete. We are currently verifying your
            credentials with the registry. This usually takes 24-48 hours.
          </p>

          {/* BUTTON */}
          <Button className="mt-6 bg-blue-700 hover:bg-blue-800 cursor-pointer">
            ↻ Refresh Status
          </Button>
        </div>

        {/* ROADMAP CARD */}
        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-semibold text-slate-800 mb-6">
            Verification Roadmap
          </h3>

          <div className="relative pl-8 space-y-8">

            {/* vertical line */}
            <div className="absolute left-[10px] top-2 bottom-2 w-[2px] bg-slate-200"></div>

            {/* STEP 1 */}
            <div className="relative flex gap-4">
              <div className="absolute -left-[34px] bg-green-100 p-1.5 rounded-full">
                <Check className="w-4 h-4 text-green-600" />
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Account Created
                </p>
                <p className="text-xs text-slate-500">
                  Completed on {currentMonth} {currentDate}, {currentYear}
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex gap-4">
              <div className="absolute -left-[34px] bg-blue-100 p-1.5 rounded-full">
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Identity Sent to Registry
                </p>
                <p className="text-xs text-blue-600">
                  In Progress
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex gap-4 opacity-60">
              <div className="absolute -left-[34px] bg-slate-200 p-1.5 rounded-full">
                <MoreHorizontal className="w-4 h-4 text-slate-500" />
              </div>

              <div>
                <p className="font-medium text-slate-700">
                  Profile Activation
                </p>
                <p className="text-xs text-slate-400">
                  Upcoming
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* HELP CARD */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Headphones className="text-blue-600 w-5 h-5" />
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                Need assistance?
              </p>
              <p className="text-sm text-slate-500">
                If you have questions about your credentials, contact the
                University Verification Officers.
              </p>
            </div>
          </div>

          <Button className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
            Contact Help
          </Button>
        </div>

        {/* FOOTER */}
        <div className="text-center text-xs text-slate-400 space-y-2">
          <p>© {currentYear} TalentPortal. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VerifiationStatus;