import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import maja from '../assets/maja.jpg';

export default function Hero() {
    return (
<Box className="hero-container" sx={{  padding: '2%', textAlign: 'center' }}>
            <h1>CAT'S MEOW CODING</h1>
            <h3>(and photography)</h3>
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
                    
                </Box>

            </Box>
            <Box sx={{ width: '40%', textAlign: 'center', }}>
                <img src={maja} alt="profile image" width={200} style={{boxShadow: '0px 0px 5px 5px #938BA1'}}/>

            </Box>
        </Box>
</Box>
    )
}
