import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import maja from '../assets/maja.jpg';

export default function Hero() {
    return (

        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', height: '40%', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ width: '60%' }}>
                <Box sx={{
                    textAlign: 'center',
                }} className="tag">
                    <div className="hero">
                        <h2>Hello</h2>
                        <h2>Hej</h2>
                        <h2>Bonjour</h2>
                    </div>
                    <h6 className="tag" >I'm Cat, Jag heter Cat, Je m'appelle Cat</h6>
                    {/* <p>A photographer for 15 years, I originally started my professional journey studying my BFA at UIUC in the mid 2000s. I have photographed countless concerts, weddings, engagements, runway shows, you name it. I attended the Full Stack Development bootcamp through UM in 2023-2024. I have experience with HTML, CSS, JavaScript, Node.js, Express, MySQL, MongoDB, and React. In my free time I enjoy attempting to play metal on the cello and piano, drawing digital art, playing the Heavy in competitive Splatoon and simply vegging out at home with my husband and elderly Bengal cat (photo by me pictured above in 2014).</p> */}
                </Box>

            </Box>
            <Box sx={{ width: '40%', textAlign: 'center', }}>
                <img src={maja} alt="profile image" width={200} style={{boxShadow: '0px 0px 5px 5px #938BA1'}}/>

            </Box>
        </Box>

    )
}
