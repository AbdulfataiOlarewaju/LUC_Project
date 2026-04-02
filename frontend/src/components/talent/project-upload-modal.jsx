import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ShieldCheck,
  Info,
  UploadCloud,
  X,
  FileText,
  Lock,
  Send,
  HelpCircle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { fetchNiches } from "@/store/talent/niches-slice";

function ProjectUploadDialog() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [ipTimestamp, setIpTimestamp] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coreNiches, setCoreNiches] = useState("");
  const { niches, subNichesByNiche, isLoading } = useSelector(
    (state) => state.niches,
  );
  const fileRef = useRef(null);

  const dispatch = useDispatch();

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only PDF or DOCX files are allowed.");
      setFile(null);
      return;
    }
    if (selectedFile.size > 500 * 1024) {
      setError("File must be less than 500KB.");
      setFile(null);
      return;
    }
    setError("");
    setFile(selectedFile);
  };

  const handleClickUpload = () => fileRef.current.click();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  };

  useEffect(() => {
    dispatch(fetchNiches());
  }, [dispatch]);

  console.log(niches, "niches");

  const niChes = [
    { id: "", name: "Select Niches" },
    ...niches.map((n) => ({
      id: n.id,
      name: n.name,
    })),
  ];

 console.log("coreNiches:", coreNiches);

  return (
    <DialogContent
      className="  w-[95vw] sm:max-w-lg lg:max-w-2xl  max-h-[90vh] overflow-y-auto p-0 rounded-2xl overflow-x-hidden border border-slate-200 shadow-xl"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-[17px] font-semibold text-slate-800 leading-tight">
              Submit Research Project
            </h2>
            <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              End-to-End Encrypted Tunnel
            </p>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 pt-5 pb-3 space-y-5">
        {/* Info Banner */}
        <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
          <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
          <p className="text-sm text-slate-600 leading-snug">
            All uploads undergo a 
            <span className="font-semibold text-slate-800 mr-1">
              mandatory university admin review  
            </span>   
              and
            <span className="font-semibold text-slate-800 ml-1">
              plagiarism check
            </span>
            . Projects remain private until verification is complete.
          </p>
        </div>

        {/* Project Title */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">
            Project Title
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the full title of your research"
            className="h-11 rounded-xl border-slate-200 text-sm placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-100"
          />
        </div>

        {/* Category / Niche */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">
            Category/Niche
          </label>
          <div className="relative">
            <Select
              value={coreNiches}
              onChange={(e) => setCoreNiches(e.target.value)}
              className="w-full h-11 px-3 pr-10 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 appearance-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={"Select department or field"} />
              </SelectTrigger>
              <SelectGroup>
                <SelectContent className="mt-15">
                  {niChes.map((item) => (
                    <SelectItem
                      key={item.id || "placeholder"}
                      value={item.id || "placeholder"}
                      disabled={!item.id}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">
            Project Manuscript (PDF/DOCX)
          </label>

          <div
            onClick={!file ? handleClickUpload : undefined}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative rounded-xl border-2 border-dashed transition-all cursor-pointer
              ${
                isDragging
                  ? "border-blue-400 bg-blue-50"
                  : file
                    ? "border-emerald-300 bg-emerald-50 cursor-default"
                    : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/40"
              }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.docx"
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />

            {file ? (
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 leading-tight">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="p-1.5 rounded-lg hover:bg-emerald-100 text-emerald-400 hover:text-emerald-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-9 gap-2">
                <UploadCloud
                  className={`w-9 h-9 transition-colors ${
                    isDragging ? "text-blue-500" : "text-blue-400"
                  }`}
                />
                <p className="text-sm font-semibold text-slate-700">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  Max size: 500KB
                </p>
              </div>
            )}
          </div>

          {error && (
            <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
              <X className="w-3 h-3" />
              {error}
            </p>
          )}
        </div>

        {/* IP Timestamping */}
        <div className="flex items-start gap-3 py-3 px-4 rounded-xl border border-slate-100 bg-slate-50">
          <Checkbox
            id="ip-timestamp"
            checked={ipTimestamp}
            onCheckedChange={setIpTimestamp}
            className="mt-0.5 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <div className="flex-1">
            <label
              htmlFor="ip-timestamp"
              className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              Request Intellectual Property Timestamping
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            </label>
            <p className="text-xs text-slate-500 mt-0.5 leading-snug">
              Secure your priority of invention or discovery with a verifiable
              cryptographic signature.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Lock className="w-3 h-3" />
          Secure 256-bit AES Encryption Active
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-10 px-5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            Cancel
          </Button>
          <Button className="h-10 px-5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 shadow-sm">
            <Send className="w-3.5 h-3.5" />
            Submit Project
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

export default ProjectUploadDialog;
