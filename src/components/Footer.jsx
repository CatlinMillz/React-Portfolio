import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box sx={{  textAlign: 'center', padding: '10px' }}>
        <Box>
            <IconButton aria-label="github" onClick={() => window.location.replace('')} size='large'> 
            <GitHubIcon />
             </IconButton> 
        </Box>
      <p>© 2021 Cat's Meow Coding</p>
    </Box>
  )
}
