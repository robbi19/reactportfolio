import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/robbin-collins-jr-936a4922b" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="github.com/robbi19" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
    </div>
  )
}

export default HeaderSocials