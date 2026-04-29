import { Card } from "@/components/ui/card";
import cyberSecurityImg from "@/assets/cyber-security-concept-digital-art.jpg";
import webDevImg from "@/assets/web-development.jpg";
import tailoringImg from "@/assets/tailoring.avif";
import graphicDesignImg from "@/assets/graphics.jpg";
import cyberSecurityImg2 from "@/assets/cybersecurity.jpg";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import { cardVariants, containerVariants, itemVariants } from "@/lib/animations";
const skills = [
  { title: "Cybersecurity", img: cyberSecurityImg2, description: "Security analysts & ethical hackers", category: "IT & Security" },
  { title: "Web Development", img: webDevImg, description: "Fullstack & frontend specialists", category: "Engineering" },
  { title: "Tailoring", img: tailoringImg, description: "Bespoke design & garment construction", category: "Fashion" },
  { title: "Graphic Design", img: graphicDesignImg, description: "Visual identity & motion graphics", category: "Arts" },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardImageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function Skills() {
  return (
    <motion.section 
      className="py-16 px-4 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl font-extrabold text-slate-900 mb-5"
          variants={itemVariants}
        >
          Explore Specialized Niches
        </motion.h2>
        <motion.div 
          className="mb-8 flex items-end justify-between"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          <p className="text-md text-slate-600">Top categories of student expertise</p> 
          <motion.a 
            href="#" 
            className="text-blue-700 hover:text-blue-700 font-medium"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring" }}
          >
            View all niches →
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          variants={cardContainerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className=" bg-white shadow-sm p-0 overflow-hidden cursor-pointer h-full group">
                <motion.div
                  className="w-full md:h-[270px] overflow-hidden"
                  variants={cardImageVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={skill.img} 
                    alt={skill.title} 
                    className="w-full h-[290px] object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-200" 
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span 
                    className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                  >
                    <Badge className='bg-blue-100 text-blue-700 px-3 py-1 mb-2 rounded-full'>
                      {skill.category}
                    </Badge>
                  </motion.span>
                  <motion.h3 
                    className="text-xl font-bold text-slate-900 mb-2"
                    whileHover={{ color: "#1e40af" }}
                  >
                    {skill.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-slate-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
