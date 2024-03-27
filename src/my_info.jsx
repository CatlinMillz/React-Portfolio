//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

const backgroundImageUrl = 'https://www.pexels.com/photo/defocused-image-of-lights-255379/';


// first and last name
const name = {
  firstname: 'Cat',
  lastname: 'Miller',
// link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: '',
};

// job title or skills or whatever 
const typeWriterText = [
  'Photographer',
  'Full Stack Developer',
  'Cat Lady'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: '',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/CatlinMillz',
  },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Photography',
    description:
      "A photographer for 15 years, I originally started my professional journey studying my BFA at UIUC in 2012-2015. I have photographed countless concerts, weddings, engagements, runway shows, you name it.",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-instagram',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
    "I attended the Full Stack Development bootcamp through UM in 2023-2024. I have experience with HTML, CSS, JavaScript, Node.js, Express, MySQL, MongoDB, and React.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  
];

// Projects
const projectData = [
  {
    title: 'WeatherLens',
    description: 'The Weather & Image Comparison Tool is a web application that allows users to compare the weather conditions of two cities along with visual representations through images. The tool fetches real-time weather data using the OpenWeatherMap API, displays the data in a user-friendly format, and utilizes the Unsplash API to showcase images related to the searched cities. Additionally, the tool provides a geographical perspective by integrating Google Maps to visualize the locations of the compared cities.',
    demoUrl: 'https://sarmoros.github.io/WeatherLens/' 
  },
  {
    title: 'Persona Pals',
    description: 'Choose from 4 famous, unique personalities for your digital companion tailored to your interests. A simple selection process with real time adaptation during conversations will help you engage in personalized and memorable chats.',
    demoUrl: 'https://drive.google.com/file/d/1F50TmHwALSqHOCsyrmxZHzUij9TnKKfT/view?ts=65b6fbac' 
  },
  {
    title: 'Echoes of Astra',
    description: 'Welcome to Echoes of Astra, your virtual dream interpreter powered by cutting-edge AI technology! Dive into the mysterious realms of your subconscious with our user-friendly platform.',
    demoUrl: 'https://drive.google.com/file/d/1IwnHZLdhXe_UxkF7kpqzcasD90tbWhJp/view' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// infotext.
const aboutMeText = {
  infotext: `Hey! I'm Cat, a Swedish American wannabe programmer. I still have quite a ways to go. I love photography, illutsration, metal and house music, Pokemon and competitive Splatoon.
    `,
  power_slogan: `From Cat's Meow Photography to Cat's Meow Programming`,
};

// For contact form 

const emailConfig = {
  serviceID: 'service_ayujige',
  templateID: 'template_f51jp3l',
  userID: 'nk2HIAzfVpPouIWv8',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  projectData,
  aboutMeText,
  emailConfig,
};
