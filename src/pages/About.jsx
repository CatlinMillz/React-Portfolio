import React from 'react'
import Hero from '../components/Hero'

import maja from '../assets/maja.jpg';

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
        <p className="fade-in delay">A creative photographer capturing life's best moments.</p>
      </div>
      {/* Bio Section */}
      <div className="bio">
        <img src={maja} alt="Your Name" className="profile-img" />
        <p> I’m a passionate photographer specializing in **[Portraits, Landscapes, Events]**. I love telling stories through my lens and capturing emotions that last forever. Let’s create something amazing together!
        </p>
      </div>
    </section>
  )
}