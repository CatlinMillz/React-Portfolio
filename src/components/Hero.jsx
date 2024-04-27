import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import maja from '../assets/maja.jpg';

export default function Hero() {
    return (

        <Box sx={{ p: 2, border: '1px solid black', display: 'flex', justifyContent: 'space-between', height: '40%', alignItems: 'center', flexWrap: 'wrap' }}>
            <div >
                <div className="hero">
                    <h2>Hello</h2>
                    <h2>Hej</h2>
                    <h2>Bonjour</h2>
                </div>
                <Box sx={{
                    textAlign: 'center',
                }} className="tag">
                    <h6>I'm Maja, Jag heter Maja, Je m'appelle Maja</h6>
                </Box>
                </div>
                <div >
                    <img src={maja} alt="profile image" width={200} />
                </div>
        </Box>

    )
}
