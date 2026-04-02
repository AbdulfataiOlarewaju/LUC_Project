import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, ImagePlus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNiches, fetchSubNiches } from "@/store/talent/niches-slice";
import { saveStepTwo } from "@/store/auth/registerSlice";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

function TalentRegisterTwoPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [photoName, setPhotoName] = useState("");
  const [coreNiches, setCoreNiches] = useState([]);
  const [bio, setBio] = useState("");

  const [openNiches, setOpenNiches] = useState([]);
  const [selectedSubNiches, setSelectedSubNiches] = useState([]);

  const currentYear = new Date().getFullYear();

  const { niches, subNichesByNiche , isLoading} = useSelector((state) => state.niches);

  const dispatch = useDispatch();
  const canContinue = coreNiches.length > 0;
  const toggleNiche = (nicheId) => {
    setOpenNiches((prev) => {
      const isOpen = prev.includes(nicheId);

      if (isOpen) {
        return prev.filter((id) => id !== nicheId);
      } else {
        // fetch ONLY if not already fetched
        if (!subNichesByNiche[nicheId]) {
          dispatch(fetchSubNiches(nicheId));
        }
        return [...prev, nicheId];
      }
    });
  };

  const toggleSubNiche = (sub) => {
    setSelectedSubNiches((prev) => {
      const exists = prev.find((item) => item.id === sub.id);

      if (exists) {
        return prev.filter((item) => item.id !== sub.id);
      }

      return [...prev, sub];
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
    }
  };

  useEffect(() => {
    dispatch(fetchNiches());
  }, [dispatch]);

  console.log(niches);
  console.log("subNichesByNiche:", subNichesByNiche);

  function handleContinue(){
    if(selectedSubNiches.length === 0  || !bio.trim()){
      toast.message('Please select at least one sub-niche and enter your bio to continue');
      return
    }
    dispatch(
    saveStepTwo({
      // sub_niche_id: selectedSubNiches.map((item) => item.id),
      sub_niche_id: selectedSubNiches[0]?.id,
      bio,
    }))
  }
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

            <div className="mt-6 flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center">
                  {photoName ? (
                    <img
                      src={URL.createObjectURL(
                        fileInputRef.current?.files?.[0],
                      )}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImagePlus className="w-6 h-6 text-slate-400" />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-blue-700 text-white p-1.5 rounded-full shadow"
                >
                  <ImagePlus className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  Upload new photo
                </button>

                {photoName && (
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoName("");
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove photo
                  </button>
                )}

                <p className="text-xs text-slate-400">
                  {photoName || "No file selected"}
                </p>
              </div>

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
              {niches.map((niche) => {
                const isOpen = openNiches.includes(niche.id);
                  if(isLoading){
                    return (
                      <Skeleton className="h-10 w-full" />
                    )
                  }
                return (
                  
                  <button
                    key={niche.id}
                    onClick={() => toggleNiche(niche.id)}
                    className={`px-4 py-2 rounded-lg border text-sm ${
                      isOpen
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    {niche.name}
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

            <div className="mt-6 space-y-6">
              {openNiches.map((nicheId) => {
                const niche = niches.find((n) => n.id === nicheId);
                const subNiches = subNichesByNiche[nicheId] || [];

                return (
                  <div key={nicheId}>
                    <p className="text-xs font-semibold text-blue-600 uppercase">
                      {niche?.name} SPECIALTIES
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {subNiches.map((sub) => {
                        const selected = selectedSubNiches.some(
                          (item) => item.id === sub.id,
                        );

                        return (
                          <button
                            key={sub.id}
                            onClick={() => toggleSubNiche(sub)}
                            className={`px-3 py-1 rounded-full text-xs ${
                              selected
                                ? "bg-blue-700 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {sub.name}
                            {selected && " ✕"}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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
            className="w-full bg-blue-700 py-5 cursor-pointer"
            onClick={()=>{
              handleContinue();
              navigate('/talent-sign-up/step-three')
            }}
          >
            Continue →
          </Button>

          <Button
            type="button"
            className="mt-4 text-sm text-slate-400 hover:text-slate-600 bg-gray-200 w-full py-5 cursor-pointer"
               onClick={()=>{
              handleContinue(),
              navigate('/')
            }}
          >
            Save for Later
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-xs text-slate-400 mt-10 sm:flex-row">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          © {currentYear} LUC Talent Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default TalentRegisterTwoPage;
