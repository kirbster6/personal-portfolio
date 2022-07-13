import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href='https://www.linkedin.com/in/kammari/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/kirbster6' target="_blank"><BsGithub /></a>
      <a href='https://www.instagram.com/imkirbyammari/?hl=en' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default SocialMedia;