import { useEffect, useState } from "react";

import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const NoHoverBtn = styled(Button)({
  borderColor: 'initial',
  '&:hover': {
    borderColor: '#3B5249',
  },
});

export default function Thanks() {
    const API_URL = `https://api.thecatapi.com/v1/images/search`;
    const API_KEY = import.meta.env.VITE_CAT_API_KEY;

    const [cats, setCats] = useState(null)

    useEffect(() => {

        async function fetchCats() {
            const catData = await fetch(API_URL, {
                headers: {
                    'x-api-key': API_KEY
                }
            });

            const catJson = await catData.json();

            setCats(catJson)


        }
        fetchCats()

    }, [])
    // console.log(cats[0].url);

    return (
        <div className="text-center" >
            <h1 style={{fontFamily: "Archivo Black", fontSize:"52px"}}>Thanks!</h1>

            <p style={{fontFamily: "Montserrat", fontSize:"20px"}}>Your message has been sent. Here's a cat just for you!</p>

            <div className="m-5">
                {cats && <img src={cats[0]?.url} alt="" width={250} style={{boxShadow: '0px 0px 5px 5px #938BA1'}}/>
                }
            </div>

<div >
            <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily: "Shadows Into Light" , marginRight: '2%', }} component={Link} to='/photography'>
            I want to see my photos!
          </NoHoverBtn>

          <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily: "Shadows Into Light" }} component={Link} to='/development'>
            I want to see my Applications!
          </NoHoverBtn>

</div>

        </div>
    )
}
