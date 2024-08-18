import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const NoHoverBtn = styled(Button)({
  borderColor: 'initial',
  '&:hover': {
    borderColor: '#3B5249',
  },
});

export default function Project(props) {
  const { project } = props;
  return (
    <Card variant="outlined" className='card'>
      <CardContent>

        <Typography variant="h5" component="div" sx={{ fontFamily: 'Montserrat', fontWeight: "bold" }} >
          {project.title}
        </Typography>
        {/* GIF goes here */}
        <Typography sx={{ mb: 1.5, fontFamily: 'Montserrat' }} color="text.secondary" >
          {project.description}
        </Typography>

      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={()=> window.location.replace(project.demoUrl)} sx={{fontFamily: 'Shadows Into Light', fontSize: "18px"}}>Visit live site</Button> */}
        <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily: "Shadows Into Light" }} component={Link} to={project.demoUrl}>
          View Demo/Site
        </NoHoverBtn>
      </CardActions>
    </Card>
  )
}