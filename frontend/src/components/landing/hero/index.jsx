import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "../../../assets/group-of-student.webp"
import { School, Search, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";
import { containerVariants, itemVariants, floatVariants, buttonVariants } from "@/lib/animations.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstitutions } from "@/store/talent/institution-slice";
import { fetchAllTalents } from "@/store/talent/talent-slice";

export default function Hero() {
  const { institutions, isLoading } = useSelector((state) => state.institutions);
   const { talents } = useSelector((state)=>state.talents)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hero useEffect: dispatching fetches');
    dispatch(fetchInstitutions());
    dispatch(fetchAllTalents());
    console.log('Dispatched fetchAllTalents');
  }, [dispatch]);

  console.log("Hero institutions:", institutions);
  console.log("Talents state:", talents);
  

  return (
    <motion.section 
      className="py-20 px-6 lg:px-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <motion.p 
            className="text-sm font-semibold uppercase tracking-wider text-blue-700"
            variants={itemVariants}
          >
            Empowering student careers
          </motion.p>
          <motion.h1 
            className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
            variants={itemVariants}
          >
            LUC - Student Talent Marketplace
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600"
            variants={itemVariants}
          >
            Connecting top-tier student specialists with industry-leading opportunities. Find the next generation of professionals today.
          </motion.p>
          <motion.div 
            className="flex flex-wrap items-center gap-3 relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute left-3 h-4 w-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Search className="h-5 w-5"/>
            </motion.div>
            <input 
              type="text" 
              placeholder="Search for talent..." 
              className="h-12 flex-1 min-w-45 md:min-w-55 rounded-lg border border-slate-200 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <motion.div variants={buttonVariants}>
              <Button className="h-12 px-6 bg-blue-800 text-white hover:bg-blue-700 cursor-pointer text-sm md:text-medium">Find Talent</Button>
            </motion.div>
          </motion.div>
      
          <motion.div 
            className="flex items-center gap-8"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <Select>
                <SelectTrigger className="w-full max-w-48 bg-gray-100">
                  <SelectValue placeholder={<><School className="h-4 w-4 mr-2" />institutions</>} />
                </SelectTrigger>
                <SelectContent className='mt-9'>
                  {
                    
                     (
                    institutions.map((institution) => (
                      <SelectItem key={institution.id} value={institution.name}>
                        {institution.name}
                      </SelectItem>
                    ))
                  ) }
                </SelectContent>
              </Select>
                  
            </motion.div>
            <motion.div variants={itemVariants}>
              <Select>
                <SelectTrigger className="w-full max-w-48 bg-gray-100">
                  <SelectValue placeholder={<><User className="h-4 w-4 mr-2" /> Talent Name</>} />
                </SelectTrigger>
                <SelectContent className="mt-9">
                  {/* Talent names to be implemented */}
                </SelectContent>
              </Select>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <motion.div
            className="h-80 rounded-3xl bg-slate-100 shadow-lg overflow-hidden"
            animate="visible"
            variants={floatVariants}
          >
            <img
              src={heroImg}
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="absolute left-0 bottom-[-17px] rounded-2xl bg-white px-4 py-3 shadow-lg border border-slate-200"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#25d366] rounded-full animate-pulse"></div>
              <p className="text-xs uppercase tracking-widest text-green-600"> Live active students</p>
            </div>
            <p className="text-2xl font-bold">12,400+</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
