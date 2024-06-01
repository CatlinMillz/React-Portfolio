import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const NoHoverBtn = styled(Button)({
  borderColor: 'initial',
  '&:hover': {
    borderColor: '#3B5249',
  },
});

export default function Contact() {
  return (

  <div style={{display: 'flex', justifyContent: 'center'}}  >
    <div className="container border p-2 m-5 text-center"  style={{width: '50%'}}>
      <h1 style={{fontFamily: "Archivo Black"}}>Contact Me!</h1>
      <form target="_blank" action="https://formsubmit.co/catsmeowphoto@gmail.com" method="POST">
            <input type="text" name="_honey" style={{display: 'none'}}></input>
            <input type="hidden" name="_next" value="http://localhost:5173/thanks"></input>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required style={{fontFamily: "Montserrat"}}/>
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required style={{fontFamily: "Montserrat"}}/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required style={{fontFamily: "Montserrat"}}></textarea>
        </div>
        {/* <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button> */}
        <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily: "Shadows Into Light" }} type='submit'>
        Submit Form
          </NoHoverBtn>
      </form>
    </div>
  </div>
    
  )
}