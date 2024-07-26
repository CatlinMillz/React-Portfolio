import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: '10px' }}>
      <Box>
        <IconButton aria-label="github" onClick={() => window.location.replace('')} size='large'>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="linkedin" onClick={() => window.location.replace('')} size='large'>
          <LinkedInIcon />
        </IconButton>
      </Box>
      <p>© 2024 Cat's Meow Coding</p>
    </Box>
  )
}
