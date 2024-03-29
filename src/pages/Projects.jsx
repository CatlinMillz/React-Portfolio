import React from 'react'
import Project from '../components/Project'

export default function Projects() {
  return (
    <div>
        <Project info='hello'/>
    title: 'WeatherLens',
    description: 'The Weather & Image Comparison Tool is a web application that allows users to compare the weather conditions of two cities along with visual representations through images. The tool fetches real-time weather data using the OpenWeatherMap API, displays the data in a user-friendly format, and utilizes the Unsplash API to showcase images related to the searched cities. Additionally, the tool provides a geographical perspective by integrating Google Maps to visualize the locations of the compared cities.',
    demoUrl: 'https://sarmoros.github.io/WeatherLens/' 
  
    title: 'Persona Pals',
    description: 'Choose from 4 famous, unique personalities for your digital companion tailored to your interests. A simple selection process with real time adaptation during conversations will help you engage in personalized and memorable chats.',
    demoUrl: 'https://drive.google.com/file/d/1F50TmHwALSqHOCsyrmxZHzUij9TnKKfT/view?ts=65b6fbac' 
  
    title: 'Echoes of Astra',
    description: 'Welcome to Echoes of Astra, your virtual dream interpreter powered by cutting-edge AI technology! Dive into the mysterious realms of your subconscious with our user-friendly platform.'
    demoUrl: 'https://drive.google.com/file/d/1IwnHZLdhXe_UxkF7kpqzcasD90tbWhJp/view' 
 
    </div>
  )
}