import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Building, LogIn, Mail, Lock } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  headerVariants,
  buttonVariants,
} from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import studentPortal from "@/assets/college campus-rafiki.png" 



function TalentLoginPage() {

  function onSubmit(){
    
  }
    return ( 
        <div className="min-h-screen bg-slate-50">
             <motion.header
        className="px-4 lg:px-20 h-16 flex items-center justify-between border-b bg-white fixed top-0 left-0 right-0 z-50 w-screen"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <motion.div
          className="flex items-center justify-between gap-2"
          whileHover={{ scale: 1.05 }}
          variants={buttonVariants}
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="p-2 bg-blue-800 rounded-md text-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="h-6 w-6" />
            </motion.div>
            <motion.span
              className="font-bold text-2xl text-black"
              variants={buttonVariants}
            >
              LUC
            </motion.span>
          </Link>
        </motion.div>

        <div className="ml-auto flex items-center gap-4">
          <motion.div variants={buttonVariants} transition={{ delay: 0.2 }}>
            <Button className="bg-blue-100 text-blue-800  px-4 py-4.5 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
              Help
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="pt-32 pb-20 px-4 lg:px-20">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg grid lg:grid-cols-2 overflow-hidden">

    {/* LEFT SIDE */}
    <div className="relative hidden lg:block">
      <img
        src={studentPortal}
        alt="student portal"
        className="h-full w-full object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-700/70 to-transparent"></div>

      <div className="absolute bottom-10 left-10 text-white max-w-sm">
        <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded">
          Student Portal
        </span>

        <h2 className="text-3xl font-bold mt-3">
          Unlock Your Potential
        </h2>

        <p className="text-sm mt-2 text-white/90">
          Connect with leading organizations and showcase your academic
          achievements to the world.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="p-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Talent Login
      </h2>

      <p className="text-md text-slate-500 mt-2">
        Welcome Back, Scholar. Access your student profile and career
        opportunities.
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>

        {/* Email */}
        <div>
          <Label className="text-sm font-medium text-slate-700">
           <Mail className="w-4 h-4"/> University Email
          </Label>
          <Input
            type="email"
            placeholder="name@university.edu"
            required
            className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between">
            <Label className="text-sm font-medium text-slate-700">
             <Lock className="w-4 h-4"/> Password
            </Label>

            <Link
              to="/forgot-password"
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Input
            type="password"
            placeholder="••••••••"
            required
            className="mt-2 w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Remember */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Checkbox id="remember"  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> 
          <span>Remember Me</span>
        </div>

        {/* Button */}
        <Button onClick={()=>onSubmit} className="w-full bg-blue-700 hover:bg-blue-800 py-5 text-white text-sm cursor-pointer">
          Sign In to Dashboard →
        </Button>
      </form>

      <div className="mt-8 border-t pt-6 text-sm text-slate-500 text-center">
        Don't have an account?{" "}
        <Link
          to="/talent-sign-up"
          className="text-blue-700 font-medium hover:underline"
        >
          Register your University
        </Link>
      </div>

    </div>
  </div>
</main>


        <footer className="border-t border-slate-200 bg-white py-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row">
                  <p>© 2024 LUC Platform. All rights reserved.</p>
                  <div className="flex items-center gap-4">
                    <Link to="#" className="hover:text-slate-700">
                      Privacy Policy
                    </Link>
                    <span className="h-4 w-px bg-slate-200" />
                    <Link to="#" className="hover:text-slate-700">
                      Terms of Service
                    </Link>
                    <span className="h-4 w-px bg-slate-200" />
                    <Link to="#" className="hover:text-slate-700">
                      Support
                    </Link>
                  </div>
                </div>
              </footer>
        </div>
     );
}

export default TalentLoginPage;