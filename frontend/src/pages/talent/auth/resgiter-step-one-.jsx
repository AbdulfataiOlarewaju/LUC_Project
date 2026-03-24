import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function TalentRegsiterOnePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="h-16 flex items-center justify-between px-6 border-b bg-white">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-700 text-white rounded-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h1 className="font-semibold">LUC Platform</h1>
        </div>

        <button className="text-xl">✕</button>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 px-4">
        {/* TOP */}
        <p className="text-xs text-blue-600 font-semibold">STEP 1 OF 3</p>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-3xl font-bold">Talent Registration</h2>
          <span className="text-sm text-slate-500">33% Complete</span>
        </div>

        {/* PROGRESS */}
        <div className="w-full h-2 bg-slate-200 rounded mt-4">
          <div className="w-1/3 h-full bg-blue-700 rounded"></div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h3 className="font-semibold text-lg">Academic Background</h3>
          <p className="text-sm text-slate-500 mt-1">
            Tell us a bit about your current studies and identity.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <input placeholder="Full Name" className="border p-3 rounded-md" />

            <select className="border p-3 rounded-md">
              <option>Select University</option>
            </select>
          </div>

          <input
            placeholder="Major / Field of Study"
            className="border p-3 rounded-md mt-4 w-full"
          />

          {/* LEVEL */}
          <div className="mt-6">
            <p className="text-sm mb-2">Current Level of Study</p>

            <div className="grid grid-cols-4 gap-3">
              {["Undergrad", "Graduate", "PhD", "Alumni"].map((item) => (
                <button
                  key={item}
                  className="border rounded-md py-2 hover:bg-blue-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button className="text-slate-500">Cancel</button>

            <Button className="bg-blue-700">Next Step: Interests →</Button>
          </div>
        </div>
        {/* STEP FOOTER */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* STEP 2 */}
          <div>
            <p className="text-xs text-blue-600 font-semibold">
              STEP 2: INTERESTS
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Customize your feed by selecting your areas of expertise.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="opacity-50">
            <p className="text-xs font-semibold">STEP 3: VERIFICATION</p>
            <p className="text-xs text-slate-400 mt-1">
              Secure your spot by verifying your student email.
            </p>
          </div>

          {/* PRIVACY BOX */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
            <p className="font-semibold text-blue-700">Privacy First</p>
            <p className="text-slate-600 mt-1">
              Your academic data is only used for verification and match
              quality.
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <p className="text-center text-xs text-slate-400 mt-10">
          © 2024 LUC Platform. Empowering student excellence globally.
        </p>
      </div>
    </div>
  );
}

export default TalentRegsiterOnePage;
