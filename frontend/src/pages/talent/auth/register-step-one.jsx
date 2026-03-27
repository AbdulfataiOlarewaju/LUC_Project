import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { saveStepOne } from "@/store/auth/registerSlice";
import { fetchInstitutions } from "@/store/talent/institution-slice";


function TalentRegisterOnePage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [level, setLevel] = useState("Undergrad");

   const { institutions, isLoading } = useSelector((state) => state.institutions);
   
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchInstitutions());
    
    
  }, [dispatch]);

  console.log("Hero institutions:", institutions);

  const universities = [
    { id: '', name: 'Select University' },
    ...institutions.map((inst) => ({
      id: inst.id,
      name: inst.name
    }))
  ];

  const canContinue =
    fullName.trim().length > 0 &&
    major.trim().length > 0 &&
    university &&
    university !== '';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="h-16 flex fixed w-full items-center justify-between px-6 border-b bg-white">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-700 text-white rounded-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h1 className="font-semibold">LUC Platform</h1>
        </div>

        <Link
          to="/"
          className="text-xl rounded-full p-2 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </Link>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 px-4 py-20">
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
            <div className="relative">
              <User className="absolute left-3 top-1/2 w-5 h-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="pl-10"
              />
            </div>

            <Select
              value={university}
              onValueChange={(value) => setUniversity(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={ "Select University"} />
              </SelectTrigger>
              <SelectGroup>
                <SelectContent className='mt-15'>
                  {universities.map((item) => (
                    <SelectItem 
                      key={item.id || 'placeholder'} 
                      value={item.id || 'placeholder'}
                      disabled={!item.id}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>

          <div className="mt-4">
            <Input
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Major / Field of Study"
            />
          </div>

          {/* LEVEL */}
          <div className="mt-6">
            <p className="text-sm mb-2">Current Level of Study</p>

            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Undergrad", value: "Undergrad" },
                { label: "Graduate", value: "Graduate" },
                { label: "PhD", value: "PhD" },
                { label: "Alumni", value: "Alumni" },
              ].map((item) => {
                const selected = level === item.value;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setLevel(item.value)}
                    className={`rounded-md py-2 text-sm font-medium transition-colors border ${
                      selected
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Link to="/" className="text-slate-500 hover:text-slate-700">
              Cancel
            </Link>

            <Button
              onClick={() => {
    if (!canContinue) return;
    dispatch(
      saveStepOne({
        full_name: fullName,
        institution_id: university,
        major,
        level,
      })
    );
    navigate("/talent-sign-up/step-two");
  }}
              disabled={!canContinue}
              className="bg-blue-700"
            >
              Next Step: Interests →
            </Button>
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

export default TalentRegisterOnePage;