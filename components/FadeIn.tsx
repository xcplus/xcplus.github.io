import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

const FadeIn = ({ children, classnames, delay }: {children: React.ReactNode, classnames?:string, delay?: number}) => {

  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={inView ? "animate" : "initial"}
      variants={fadeUpVariants}
      className={classnames}
      transition={{ 
        duration: 1,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn