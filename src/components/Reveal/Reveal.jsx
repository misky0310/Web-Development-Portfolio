import React, { useEffect, useRef } from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'

const Reveal = ({children}) => {

    const ref=useRef(null);
    const isInView=useInView(ref, {once:true});

    const mainControls=useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible');
        }
    },[isInView])

  return (
    <div className='relative overflow-hidden w-[100%]' ref={ref}>
        <motion.div
            variants={{
                hidden:{opacity:0, y:300},
                visible:{opacity:1, y:0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration:1, delay:0.3}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal