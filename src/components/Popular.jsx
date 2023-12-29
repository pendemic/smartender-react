import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import mule from '../assets/moscow-mule.png';
import maitai from '../assets/maitai.png';
import mojito from '../assets/mint-mojito.png';
import martini from '../assets/martini.png';
function Popular() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
  return (
    <Box style={{backgroundColor: "#013927", width: width, height: height, marginTop: "10%"}}>
        <Grid container >
                <Grid item lg={12} xl={12} md={12} style={{textAlign: 'center'}}>
                    <div style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', fontSize: 42, color: "#CAE6D5", marginTop: height * .2}}>Choose from these classics</div>
                </Grid>
                <Grid item lg={1} xl={1} md={1}></Grid>
                <Grid item lg={2.5} xl={2.5} md={2.5}>
                    <figure><img src={mule} width="100%"/><figcaption style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', fontSize: 24, color: "white", textAlign: 'center'}}>Moscow Mule</figcaption></figure>
                </Grid>
                <Grid item lg={2.5} xl={2.5} md={2.5}>
                    <figure><img src={maitai} width="100%"/><figcaption style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', fontSize: 24, color: "white", textAlign: 'center'}}>Mai Tai</figcaption></figure>
                </Grid>
                <Grid item lg={2.5} xl={2.5} md={2.5}>
                    <figure><img src={mojito} width="100%"/><figcaption style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', fontSize: 24, color: "white", textAlign: 'center'}}>Mint Mojito</figcaption></figure>
                </Grid>
                <Grid item lg={2.5} xl={2.5} md={2.5}>
                    <figure><img src={martini} width="100%"/><figcaption style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', fontSize: 24, color: "white", textAlign: 'center'}}>Martini</figcaption></figure>
                </Grid>
                <Grid item lg={12} xl={12} md={12} style={{textAlign: 'center', marginTop: height * .1}}>
                    <Button variant="outlined" style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', color: '#B19723', borderColor: '#B19723', width: '30%'}}>View More</Button>
                </Grid>
                <Grid item lg={.5} xl={.5} md={.5}></Grid>
                <Grid item lg={1} xl={1} md={1} style={{fontFamily: 'Anton, sans-serif', fontFamily: 'Noto Serif Display, serif', color: 'white', marginTop: "2%"}}>Smartender</Grid>
        </Grid>
    </Box>
  )
}

export default Popular