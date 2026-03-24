import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, GraduationCap, Mail, UserCheck } from "lucide-react";

function TalentRegisterThreePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [matriculation, setMatriculation] = useState("");

//   const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.(edu|university)$/i.test(value);
//   const canSubmit = isValidEmail(email) && matriculation.trim().length > 3;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-blue-700 p-2 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">LUC Talent Registration</p>
              <p className="text-xs text-slate-500">Final Verification</p>
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </Link>
        </div>

        <div className="px-6 py-6">
          <p className="text-xs font-semibold text-blue-600">REGISTRATION PROGRESS</p>
          <div className="mt-2 flex items-center justify-between gap-4">
            <p className="text-sm font-medium">Step 3 of 3</p>
            <p className="text-xs font-semibold text-slate-500">100% Complete</p>
          </div>

          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full bg-blue-700"></div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <UserCheck className="h-4 w-4 text-blue-700" />
            <span>Final Verification</span>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Verify Your Status</h2>
            <p className="mt-2 text-sm text-slate-500">
              Please provide your academic credentials to proceed. This information is used solely for identity validation.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-500">
                  Institutional Email
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@university.edu"
                    className="w-full"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Must be a valid .edu or university domain address.
                </p>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500">
                  Matriculation Number
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-slate-400" />
                  <Input
                    value={matriculation}
                    onChange={(e) => setMatriculation(e.target.value)}
                    placeholder="Enter your student ID"
                    className="w-full"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Found on your university identity card.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-slate-200 bg-blue-50 p-4 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  i
                </span>
                <div>
                  <p className="font-medium text-slate-800">Platform Security</p>
                  <p className="mt-1 text-slate-600">
                    Verification is powered by your university to ensure platform integrity. We cross-reference this data with institutional records to maintain a secure talent pool.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => navigate("/talent-sign-up/step-two")}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                ← Back
              </button>

              <Button
                className="flex items-center justify-center gap-2 bg-blue-700 px-6 py-3"
                // disabled={!canSubmit}
                onClick={() => navigate("/talent-sign-up/verification")}
              >
                Complete Registration
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-blue-700">
                  ✓
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 border-t px-6 py-6 text-xs text-slate-400 sm:flex-row">
          <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-600 cursor-pointer">Academic Terms</span>
          <span className="hover:text-slate-600 cursor-pointer">Support</span>
        </div>

        <p className="text-center text-xs text-slate-400 pb-6">
          © 2024 LUC Global Talent Network. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default TalentRegisterThreePage;