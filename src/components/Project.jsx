import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Project(props) {
  const {project} = props;
  return (
    <Card sx={{ maxWidth: '30%', margin: '35px', boxShadow: 2 }} variant="outlined">
      <CardContent>
    
        <Typography variant="h5" component="div" sx={{fontFamily: 'Montserrat', fontWeight: "bold"}} >
         {project.title}
        </Typography>
        {/* GIF goes here */}
        <Typography sx={{ mb: 1.5, fontFamily: 'Montserrat' }} color="text.secondary" >
        {project.description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> window.location.replace(project.demoUrl)} sx={{fontFamily: 'Shadows Into Light', fontSize: "18px"}}>Visit live site</Button>
      </CardActions>
    </Card>
  )
}