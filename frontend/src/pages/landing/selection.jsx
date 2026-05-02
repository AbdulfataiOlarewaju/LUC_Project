import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Building, LogIn } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  headerVariants,
  navItemVariants,
  buttonVariants,
  containerVariants,
  cardVariants,
} from "@/lib/animations";
import college from "@/assets/college campus-rafiki.png";
import student from "@/assets/student.jpg";

const selections = [
  {
    title: "I am a student/Graduate",
    img: student,
    subtitle: "Talent",
    icon: GraduationCap,
link: "/talent/sign-in",
    description:
      "Get your skills verified and showcase your portfolio to top global employers.",
    buttonLabel: "Sign In as Talent",
  },
  {
    title: "I am looking for Talent",
    img: college,
    subtitle: "Client",
    icon: Briefcase,
    link: "/client-sign-in",
    description:
      "Find and hire verified student talent for your projects and corporate internships.",
    buttonLabel: "Sign In as Client",
  },
  {
    title: "I represent an institution",
    img: college,
    subtitle: "University",
    icon: Building,
    link: "/university-sign-in",
    description:
      "Verify student achievements and manage employability metrics and alumni success.",
    buttonLabel: "Sign In as University",
  },
];

const currentYear = new Date().getFullYear();
function Selection() {
  const navigate = useNavigate();

  function handleNavigate(link) {
    navigate(link);
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <motion.header
        className="px-4 lg:px-10 h-16 flex items-center justify-between border-b bg-white fixed top-0 left-0 right-0 z-50 w-screen"
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
            <Button className="bg-blue-800 text-white border border-gray-300 px-4 py-4.5 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
              Sign In
              <LogIn className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="py-30 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-900">Join LUC</h1>
            <p className="mt-3 text-sm text-slate-500">
              Select your account type to get started with the leading academic
              talent network.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {selections.map((selection, index) => {
              const Icon = selection.icon;

              return (
                <motion.div
                  key={selection.title}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 text-center"
                >
                  {/* ICON */}
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-slate-900">
                    {selection.title}
                  </h3>

                  {/* IMAGE */}
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <img
                      src={selection.img}
                      alt={selection.title}
                      className="h-32 w-full object-cover"
                    />
                  </div>

                  {/* SUBTITLE */}
                  <p className="mt-4 text-sm font-semibold text-blue-700">
                    {selection.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-sm text-slate-600">
                    {selection.description}
                  </p>

                  {/* BUTTON */}
                  <Button
                    className="mt-6 w-full bg-blue-800 text-white border border-gray-300 px-4 py-4.5 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white"
                    onClick={() => handleNavigate(selection.link)}
                  >
                    {selection.buttonLabel}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/selection"
              className="font-medium text-blue-700 hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} LUC Platform. All rights reserved.</p>
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



export default Selection;
