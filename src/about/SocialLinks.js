import React from 'react'
import { BsLinkedin, BsGithub, BsBriefcase } from "react-icons/bs";


function SocialLinks() {
  return (
    <>
    <div className='social-links'>
    <div>
        <BsBriefcase 
          onClick={() => window.open('/KarimKhalifehResume.pdf')}
          color='#fff'
          style={{ cursor: 'pointer' }}
          className="social__link__icon social__link__icon__small"
        />
        </div>
      <div>
        <BsGithub 
          onClick={() => window.open('https://www.github.com/khalifeh11/')}
          color='#fff'
          style={{ cursor: 'pointer' }}
          className="social__link__icon social__link__icon__small"
        />
        </div>
        <div>
        <BsLinkedin 
          onClick={() => window.open('https://www.linkedin.com/in/karimkhalifeh/')}
          color='#fff'
          style={{ cursor: 'pointer' }}
          className="social__link__icon social__link__icon__small"
        />
        </div>
       
       
      </div>
    </>
  )
}

export default SocialLinks