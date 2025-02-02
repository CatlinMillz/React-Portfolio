import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import maja from '../assets/maja.jpg';


export default function Hero() {
 
    return (
<Box className="hero-container" >
            {/* <h1>CAT'S MEOW CODING</h1>
            <h3>(and photography)</h3> */}
        <Box className='heroContent' >
            <Box className='hero-text-left' >
                <Box className="tag">
                    {/* <div className="hero">
                        <h2>Hello</h2>
                        <h2>Hej</h2>
                        <h2>Bonjour</h2>
                    </div> */}
                    {/* <h6  >I'm Cat, Jag heter Cat, Je m'appelle Cat</h6> */}
                    <h1 className="fade-in">Hey, I'm <span className="highlight">Cat</span> 👋</h1> 
                    <p className="fade-in delay">Capturing moments, one shot at a time.</p>
                    
                </Box>

            </Box>
            <Box  className='profile-pic-box' >
                <img src={maja} alt="profile image" className='profile-pic' style={{boxShadow: '0px 0px 5px 5px #938BA1'}}/>

            </Box>
        </Box>
</Box>
    )
}
