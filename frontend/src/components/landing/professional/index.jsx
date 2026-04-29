import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants, buttonVariants } from "@/lib/animations.js";
import { useNavigate } from "react-router";

export default function ProfessionalCTA() {
  const navigate = useNavigate()
  return (
    <motion.section 
      className="bg-slate-950 text-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-16 text-center sm:flex-row sm:text-left">
        <motion.div 
          className="max-w-xl"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-extrabold sm:text-4xl"
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            Ready to find your next professional?
          </motion.h2>
          <motion.p 
            className="mt-4 text-sm text-slate-200"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Join thousands of companies discovering elite student talent through LUC.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-3 sm:flex-row"
          variants={itemVariants}
          transition={{ delay: 0.3 }}
        >
          <motion.div variants={buttonVariants}>
            <Button onClick={()=>navigate('/client-sign-in')} className="bg-blue-800 text-white px-8 py-6 rounded-md cursor-pointer hover:opacity-80 min-w-[160px] text-lg font-semibold">
              Hire Talent
            </Button>
          </motion.div>
          <motion.div 
            variants={buttonVariants}
            transition={{ delay: 0.1 }}
          >
            <Button 
            onClick={()=>navigate('/talent-sign-in')}
              variant="secondary" 
              className="bg-gray-800 text-white border border-gray-600 px-8 py-6 rounded-md cursor-pointer hover:bg-blue-800 hover:text-white text-lg font-semibold"
            >
              Join as Student
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
