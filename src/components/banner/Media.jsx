import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaBootstrap, FaJava, FaNode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
             
             <a href="https://github.com/Bikash-Malu" target='_blank'><AiFillGithub/></a>
            </span>
            <span className="bannerIcon">
             <a href="https://twitter.com/home?lang=en" target='_blank'> <FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/bikash-malu-592722234/" target='_blank'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
          <div className="flex gap-4 mt-2">
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media