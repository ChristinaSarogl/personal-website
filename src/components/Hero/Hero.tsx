import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import RightArrow from "../icons/RightArrow";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

import "./hero.css"

const SOCIAL_LINKS = [
  { key: "Github", Icon: Github, path: "https://github.com/ChristinaSarogl" },
  { key: "Linkedin", Icon: Linkedin, path: "https://www.linkedin.com/in/christina-ioanna-saroglaki/" },
  { key: "Mail", Icon: Mail, path: "mailto:xristsar@gmail.com" }
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }


  return (
    <div ref={heroRef} className="hero-container">
      <div className="hero-bg">
        <div className="orb left" />
        <div className="orb right" />
      </div>

      <motion.div
        variants={containerVariants}
        style={{ opacity, scale }}
        initial="hidden"
        animate="visible"
        className="hero-content">

        <motion.div variants={itemVariants} className="badge">
          <span className="pulse-circle" />
          <p className="badge-content">Open to the right opportunity</p>
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
          I turn complex problems into software that feels simple —
          <br className="hidden md:block" />
          and learn <em className="text-white/80 not-italic">whatever</em> it takes to build it right.
        </motion.p>

        <motion.div variants={itemVariants} className="cta-buttons">
          <Link to={'/projects'} className={'text icon color'}>
            View Projects <RightArrow />
          </Link>
          <Link to={'/about'} className={'text ghost'}>Learn More</Link>
        </motion.div>

        <motion.div variants={itemVariants} className="social-links">
          {SOCIAL_LINKS.map(({ key, Icon, path }) => (
            <Link key={key} to={path} className="icon ghost">
              <Icon />
            </Link>
          ))}
        </motion.div>

        <div>
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
