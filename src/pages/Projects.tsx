import { motion } from "motion/react";

import CustomCursor from '../components/common/CustomCursor/CustomCursor';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import PageTitle from '../components/common/PageTitle/PageTitle';
import ProjectGrid from "../components/common/ProjectGrid/ProjectGrid";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  return (
    <>
      <div className='custom-cursor'>
        <CustomCursor />
      </div>

      <div className='content-container'>
        <Header />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='py-10 px-6 md:px-12 lg:px-40 overflow-hidden'>

          <div className="page-bg">
            <div className="orb left" />
            <div className="orb right" />
          </div>

          <div className="lg:mb-15">
            <PageTitle
              subtitle={["Projects", "Seven builds - one engineering point of view"]}
              title="Things I've Built"
              description="From full-stack platforms to machine-learning projects, 
              this is where curiosity meets code—and complex challenges become software that works."
              style='page-title'
            />
          </div>

          <ProjectGrid displayed={6} />

        </motion.div>
        <Footer />
      </div>
    </>
  );
}