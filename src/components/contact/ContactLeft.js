import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bikash Malu</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer || Java Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate full-Stack web developer with a strong skill set in design and problem-solving
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91-9583856595</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bikashmalu1@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
      
      </div>
    </div>
  );
}

export default ContactLeft