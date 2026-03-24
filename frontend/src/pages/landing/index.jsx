import { LazyMotion, m as motion } from "framer-motion";
import { domAnimation } from "framer-motion";
import { containerVariants } from "@/lib/animations.js";
import Header from "../../components/landing/header/index.jsx";
import Hero from "../../components/landing/hero/index.jsx";
import Skills from "../../components/landing/skills/index.jsx";
import Professional from "../../components/landing/professional/index.jsx";
import Footer from "../../components/landing/footer/index.jsx";

function LandingPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <motion.main
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Hero />
          <Skills />
          <Professional />
        </motion.main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default LandingPage;
