import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn, UserPlus } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { headerVariants, navItemVariants, buttonVariants, containerVariants } from "@/lib/animations.js";

const navItems = ["IT", "ENGINEERING", "FASHION", "ARTS"];

function Header() {
  const navigate = useNavigate()
  return (
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
        <Link to={"/"} className="flex items-center gap-2">
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

      <motion.div 
        className="flex-1 lg:flex justify-center hidden"
        variants={containerVariants}
      >
        <div className="ml-10 flex items-center gap-4">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={navItemVariants}
            >
              <Link className="text-gray-500 hover:text-gray-700 font-medium">{item}</Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="ml-auto flex items-center gap-4">
        <motion.div variants={buttonVariants} onClick={()=>navigate('/selection')}>
          <Button className="bg-blue-800 text-white px-4 py-[18px] rounded-md cursor-pointer hover:opacity-80 flex">
            {/* <UserPlus className="h-4 w-4 mr-2"/> */}
            Sign In
            <LogIn className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
        {/* <motion.div 
          variants={buttonVariants}
          transition={{ delay: 0.2 }}
        >
          <Button className="bg-white text-black border border-gray-300 px-4 py-[18px] rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
            Login
            
          </Button>
        </motion.div> */}
      </div>
    </motion.header>
  );
}

export default Header;
