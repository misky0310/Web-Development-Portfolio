import React from 'react'
import Reveal from '../Reveal/Reveal'

const Education = () => {
  return (
    <Reveal>
      <div id="education" className="education flex flex-col items-center justify-center text-center py-20 gap-8 w-[100%]">
              <h1 className='text-6xl'>My Education</h1>
              <Reveal>
                <div className='w-[70%] mx-auto border-2 border-linkYellow px-6 py-5 rounded-full'>
                    <h2 className='text-4xl'>B.Tech in Computer Science and Engineering</h2>
                    <p className='text-xl'>Vellore Institute of Technology</p>
                    <p className='text-xl'>2022-2026</p>
                </div>
              </Reveal>
              <Reveal>
                <div className='w-[70%] mx-auto border-2 border-linkYellow px-6 py-5 rounded-full'>
                    <h2 className='text-4xl'>Higher Secondary Education</h2>
                    <p className='text-xl'>Sister Nivedita Public School, Malda</p>
                    <p className='text-xl'>2020-2022</p>
                </div>
              </Reveal>
              <Reveal>
                <div className='w-[70%] mx-auto border-2 border-linkYellow px-6 py-5 rounded-full'>
                    <h2 className='text-4xl'>Secondary Education</h2>
                    <p className='text-xl'>St.Mary&apos;s School, Malda</p>
                    <p className='text-xl'>Upto 2020</p>
                </div>
              </Reveal>        
      </div>
    </Reveal>
  )
}

export default Education