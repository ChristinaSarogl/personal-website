import { Link } from "react-router";
import { motion } from "motion/react";

import RightArrow from "../icons/RightArrow";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

import "./hero.css"

const SOCIAL_LINKS = [
  { key: "Github", Icon: Github, path: "https://github.com/ChristinaSaroglli" },
  { key: "Linkedin", Icon: Linkedin, path: "https://www.linkedin.com/in/christina-ioanna-saroglaki/" },
  { key: "Mail", Icon: Mail, path: "mailto:xristsar@gmail.com"}
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y:30, opacity: 0 },
    visible: { 
      y:0, 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }


  return (
    <section className="hero-container">
      <div className="hero-bg">
        <div className="orb left"/>
        <div className="orb right" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content">

        <motion.div variants={itemVariants} className="badge">
          <span className="pulse-circle" />
          <p className="badge-content">Available for work</p>
        </motion.div>        

        <motion.div variants={itemVariants} className="hero-top-caption">
          <p>ADAPTABLE • FAST-LEARNING • ANALYTICAL</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}>
                Christina {" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-color">
                Saroglaki
            </motion.span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-caption">
          Turning coffee into code since 2018. Fast learner, slower sleeper.{" "}
          <br className="hidden md:block" />
          Building products that <em className="text-white/80 not-italic">actually</em> work.
        </motion.p>

        <motion.div variants={itemVariants} className="cta-buttons">
          <Link to={'/projects'} className={'text icon color'}>
            View Projects <RightArrow/>
          </Link>
          <Link to={'/about'} className={'text ghost'}>Learn More</Link>
        </motion.div>

        <motion.div variants={itemVariants} className="social-links">
          {SOCIAL_LINKS.map(({key, Icon, path}) => (
            <Link key={key} to={`/${path}`} className="icon ghost">
              <Icon />
            </Link>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="indicator">
          <div className="indicator-outline">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="indicator-dot">
            </motion.div>
          </div>
        </motion.div>
      </motion.div>      
    </section>
  );
}
