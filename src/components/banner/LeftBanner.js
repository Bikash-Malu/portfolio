import React from 'react'
import {Typewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    // const [text] = useTypewriter({
    //   words: ["Professional Coder.", "Full Stack Developer."],
    //   loop: true,
    //   typeSpeed: 20,
    //   deleteSpeed: 10,
    //   delaySpeed: 2000,
    // });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Bikash Malu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          
          a  <Typewriter
            words={["Professional Coder.", "Full Stack Developer."]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="#ff014f"
            cursorBlinking="false"
          
          />
         
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate full-Stack web developer with a strong skill set in design and problem-solving.
Proficient in HTML5,CSS,JAVASCRIPT,REACT JS,REDUX TOOLKIT,NEXT JS,CORE JAVA,ADVANCED JAVA,SPRING BOOT,MYSQL AND MONGODB. I strive to create visually appealing and interactive 
user interfaces with a disciplined approach. I am excellent in writing clean code and optimizing
 performance. I am adept at collaborating in team environments. I am enthusiastic about using
 Frameworks like React.js to build user interface application and use java for backend. I bring a
combination of creativity and technical expertise to deliver exceptional frontend and backend solution. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner