import React from 'react'
import Project from '../components/Project'
import projectData from '../assets/data/projects.json'
import Box from '@mui/material/Box';

export default function Development() {
  return (
    <Box  className="project-box" sx={{display: 'flex'}}>
      {projectData.map((project, index) => (<Project key={index} project={project}/>))} 
    </Box>
  )
}