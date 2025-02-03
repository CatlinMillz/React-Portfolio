import React from 'react'
import Hero from '../components/Hero'

import maja from '../assets/CMC.png';

export default function About() {
  return (
    // <div>
    //   <Hero />
    //   {/* Bio Section */}
    //   <div className="bio">
    //     <img src="/your-profile-image.jpg" alt="Your Name" className="profile-img" />
    //     <p> I'm a passionate photographer specializing in **[Portraits, Landscapes, Events]**. I love turning fleeting moments into timeless art. Let's create something amazing together!
    //     </p>
    //   </div>
    // </div>

    <section className="about-container">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="fade-in">Hey, I'm <span className="highlight">Cat</span> 👋</h1>
        <p className="fade-in delay">A documentarian with an eye for capturing your most treasured life's moments.</p>
      </div>
      {/* Bio Section */}
      <div className="bio">
        <img src={maja} alt="Your Name" className="profile-img" />
        <p>I remember the first time I held a camera, I fell in love. My mom had a Leica point and shoot that I couldn't put down.</p>
        <p>I started out practicing with my friends in highschool using my new (digital) Sony Alpha, exploring every park my home of Fort Lauderdale had to offer for my hungry eye. After deciding to attend college at The University of Illinois to pursue my undergraduate education in Photography, I have been shooting with my trusty Canon 5D Mark III ever since. It is my absolute honor and joy to photograph fleeting moments in time and turn them into something tangible for you.</p>
        <p>In 2023-2024, I did an education refresh and attended a coding bootcamp at the Univeristy of Miami. I made this website from scratch using React JSX! Building websites is a hobby of mine and I love to create beautiful, functional webpages. 
        </p>
        <p>True to my namesake, I am a cat mom with two beautiful rescue Bengals who I photograph often. Even though South Florida is home, I have lived all over the US, from as far as the misty forests in Washington, to the barren high plains of Wyoming, even the colorful streets of downtown New Orleans. I have a classical background in piano and cello but an ear for metal music, which I try to attempt to translate to my cello. I also enjoy downtime on my Nintendo Switch and making videos as a little extra treat for my clients. Connect with me on Instagram <b>@catsmeowphoto!</b></p>
      </div>
    </section>
  )
}