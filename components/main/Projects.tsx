import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section id='projects'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: "scale(0.9)"}}>
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.js Portfolio'
            description='Hallo'/>
             <ProjectCard
            src='/Science.png'
            title='Science Portfolio'
            description='Hallo'/>
            <ProjectCard
            src='/Spacearea.png'
            title='Space Themed Website'
            description='Hallo'/>
        </div>
    </div>
    </section>
  )
}

export default Projects