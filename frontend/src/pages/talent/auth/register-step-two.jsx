import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, ImagePlus, X } from "lucide-react";

function TalentRegisterTwoPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [photoName, setPhotoName] = useState("");
  const [coreNiches, setCoreNiches] = useState(["IT"]);
  const [refined, setRefined] = useState([
    {
      category: "IT SPECIALTIES",
      items: ["Cybersecurity", "Cloud Architecture"],
    },
    { category: "ENGINEERING SPECIALTIES", items: ["Mechanical Design"] },
  ]);
  const [bio, setBio] = useState("");

  const allCoreNiches = useMemo(
    () => ["IT", "Engineering", "Fashion", "+ Other"],
    [],
  );

  const canContinue = coreNiches.length > 0;

  const toggleCoreNiche = (niche) => {
    setCoreNiches((prev) =>
      prev.includes(niche)
        ? prev.filter((item) => item !== niche)
        : [...prev, niche],
    );
  };

  const removeRefined = (category, item) => {
    setRefined((prev) =>
      prev.map((group) =>
        group.category !== category
          ? group
          : {
              ...group,
              items: group.items.filter((i) => i !== item),
            },
      ),
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="h-16 flex items-center justify-between px-6 border-b bg-white">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-700 text-white rounded-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h1 className="font-semibold">LUC Talent</h1>
        </div>

        <Link
          to="/"
          className="text-xl rounded-full p-2 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">Step 2 of 3</p>
            <p className="text-xs font-semibold text-blue-700">66% COMPLETE</p>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded">
            <div className="w-2/3 h-full bg-blue-700 rounded" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Interests & Sub-Niches</h2>
            <p className="text-sm text-slate-500 mt-1">
              Selecting your professional focus and background
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mt-8">
          <div className="border-b px-6 py-6">
            <p className="font-semibold">Profile Photo</p>
            <p className="text-sm text-slate-500 mt-1">
              Upload a professional headshot. Max size 5MB. JPG or PNG.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group flex items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-5 py-4 text-left shadow-sm hover:border-blue-500 hover:bg-blue-50"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-slate-100 text-slate-500">
                  <ImagePlus className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-medium">Select File</p>
                  <p className="text-xs text-slate-500">
                    {photoName || "Choose a file to upload"}
                  </p>
                </div>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="border-b px-6 py-6">
            <p className="font-semibold">Core Niches</p>
            <p className="text-sm text-slate-500 mt-1">
              Pick a few areas you want to focus on.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {allCoreNiches.map((niche) => {
                const selected = coreNiches.includes(niche);
                const isAdd = niche === "+ Other";

                return (
                  <button
                    key={niche}
                    type="button"
                    onClick={() => toggleCoreNiche(niche)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      selected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-blue-50"
                    } ${isAdd ? "border-dashed" : ""}`}
                  >
                    {niche}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-b px-6 py-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Refined Expertise</p>
                <p className="text-sm text-slate-500 mt-1">
                  Add sub-niches that best match your experience.
                </p>
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                sub-niches
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {refined.map((group) => (
                <div
                  key={group.category}
                  className="rounded-lg bg-slate-50 p-4"
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {group.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => removeRefined(group.category, item)}
                          className="rounded-full p-1 text-blue-700 hover:bg-blue-100"
                          aria-label={`Remove ${item}`}
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      className="rounded-full border border-dashed border-slate-300 bg-white px-3 py-1 text-xs text-slate-500 hover:border-blue-500 hover:text-blue-700"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-6">
            <p className="font-semibold">Personal Professional Bio</p>
            <p className="text-sm text-slate-500 mt-1">
              Highlight your key achievements and what kind of projects you are
              looking for.
            </p>

            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-4 h-36"
              placeholder="Write something..."
            />

            <div className="mt-2 flex justify-end text-xs text-slate-400">
              {bio.length} / 500 characters
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            className="w-full bg-blue-700 py-5"
            onClick={() => navigate("/talent-sign-up/step-three")}
            disabled={!canContinue}
          >
            Continue →
          </Button>

          <button
            type="button"
            className="mt-4 text-sm text-slate-400 hover:text-slate-600"
            onClick={() => navigate("/")}
          >
            Save for Later
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-xs text-slate-400 mt-10 sm:flex-row">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          © 2024 LUC Talent Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default TalentRegisterTwoPage;