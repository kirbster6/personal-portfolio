import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href='https://www.linkedin.com/in/kammari/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com/kirbster6' target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href='https://www.instagram.com/imkirbyammari/?hl=en' target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default SocialMedia;