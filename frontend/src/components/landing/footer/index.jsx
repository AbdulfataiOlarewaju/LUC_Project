import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations.js";

const columns = [
  {
    title: "LUC",
    content: "Connecting the students of today with the professional landscape of tomorrow.",
    icon: <GraduationCap className="h-8 w-7 mr-2 text-blue-700" />
  },
  {
    title: "PLATFORM",
    links: ["Browse Niches", "Pricing", "Partner Institutions"]
  },
  {
    title: "RESOURCES",
    links: ["Help Center", "Student Guide", "Success Stories"]
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Privacy Policy"]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer 
      className="text-slate-200 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl gap-15 px-4 lg:grid-cols-4 lg:px-20">
        {columns.map((column, index) => (
          <motion.div 
            key={column.title}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className={column.icon ? "mb-3 text-lg font-bold text-black flex items-center" : "mb-3 font-semibold text-black"}>
              {column.icon}
              {column.title}
            </h4>
            {column.content ? (
              <p className="text-sm text-slate-400">{column.content}</p>
            ) : (
              <ul className="space-y-2 flex flex-col text-sm text-slate-400">
                {column.links.map((link, i) => (
                  <motion.a 
                    key={link}
                    href="#"
                    className="transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" }}
                  >
                    {link}
                  </motion.a>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="px-4 pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="px-0 md:px-20">
          <div className="border-t mt-12 pt-8 text-center text-xs text-slate-500 px-0 md:px-20">
          <p className="items-center">© {currentYear} LUC Marketplace. All rights reserved.</p>
        </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
