import { About } from "./components/About";
import { Expertise } from "./components/Cta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ContactUs } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Teams } from "./components/Testimonials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./App.css";



import { ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode; 
}

const AnimateOnScroll = ({ children }: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Features />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <Expertise />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Teams />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ContactUs />
      </AnimateOnScroll>
    
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
