import React from 'react'
import resume from '../../assets/resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
       <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn'>Contact</a>
    </div>
  )
}

export default CTA