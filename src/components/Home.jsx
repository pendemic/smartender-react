import background from "../smartender-home.png";
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Home() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
  return (
    <Box>
        <Grid container>
            <Grid item xl={9} lg={9} md={9}>
                <div style={{backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: width, position: "absolute", backgroundRepeat: "no-repeat"}}>
                    <div style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', height: height, width: width, color: "white"}}>
                        <div style={{marginTop: height * .1, marginLeft: width * .1, fontWeight: 'bold', fontSize: 48}}>Smartender</div>
                        <div style={{marginTop: height * .1, marginLeft: width * .07, fontSize: 90, width: "25%"}}>Randomize your night</div>
                        <div style={{marginTop: height * .1, marginLeft: width * .07, fontSize: 48, width: "30%"}}>Let Smartender choose your next drink.</div>
                    </div>
                </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3}>
                <div style={{marginTop: height * .7}}>
                    <Button variant="outlined" style={{fontFamily: 'Noto Serif Display, serif', fontWeight: "bold", backgroundColor: "white", color: "black", borderColor: "black", width: "50%", fontSize: 18}}>Feeling Lucky?</Button>
                </div>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Home