import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Footwear Page"
          des="  Footwear Hub is an e-commerce platform dedicated to providing users with a wide range of footwear options. It is only owner side webpage where he create the bill and make the orders. Tech Stack:-React jS, Node JS ,Express JS, Ant UI, MongoDB ."
          src={projectOne}
        />
        <ProjectsCard
          title="A2Z E-commerce Website"
          des=" Multi-Venvor is a comprehensive multi-vendor e-commerce platform that connects buyers and sellers, facilitating seamless transactions for a wide range of products. Built with Spring Boot as the backend framework and React as the frontend library. Tech Stack:-ReactJS, Spring Boot, Mysql."
          src={projectTwo}
        />
        <ProjectsCard
          title="Student Subject Regd."
          des="a student subject registration webpage using Spring Boot for the backend and React for the frontend involves multiple steps Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium facilis excepturi eum, eos nemo! Harum dolor nemo facilis inventore!"
        
          src={projectThree}
        />
        
       
      </div>
    </section>
  );
}

export default Projects