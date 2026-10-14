import { motion } from "motion/react";

import CustomCursor from '../components/common/CustomCursor/CustomCursor';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import Info from '../components/Info/Info';
import TextGrid from '../components/TextGrid/TextGrid';
import Timeline from "../components/Timeline/Timeline";
import Contact from "../components/Contact/Contact";

export default function AboutPage() {
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

          <div>
            <Info />
            <TextGrid />
            <Timeline />

            <div className="mt-5 md:mt-10">
              <Contact />
            </div>
          </div>
          
        </motion.div >
        <Footer />
      </div >
    </>
  )
}
