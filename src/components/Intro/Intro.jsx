import React from 'react'
import {motion} from 'framer-motion'

const Intro = () => {

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      },
    },
  };



  return (
    <div className="introCont items-center gap-5 pt-10 md:flex" id="introSection">
      
        <motion.div className="leftCont w-[55%] leading-[5rem]" 
          variants={textVariants}
          initial="initial"
          animate="animate"
          >
            <motion.h3 className='text-md' variants={textVariants}>Hello,</motion.h3>
            <motion.h1 className='text-[4rem]' variants={textVariants}>I&apos;m <span className='text-linkYellow'>Miskat</span></motion.h1>
            <motion.h1 className='text-[4rem]' variants={textVariants}>Web Developer</motion.h1>
            <motion.p className='pt-10 pb-[1.5rem] leading-8' variants={textVariants}>I&apos;m a skilled and passionate web developer with an experiece in creating visually appealing and user-friendly websites</motion.p>
        </motion.div>
        <div className="rightCont">
            <motion.img src="../../../assets/prof.jpg" alt="" className="rightContPng h-[40rem] rounded-3xl"  />
        </div>
        
    </div>
  )
}

export default Intro