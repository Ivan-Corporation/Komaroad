import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import math from '../Images/Roadmaps/Math-roadmap.png'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import PrismaZoom from 'react-prismazoom'


import '../Styles/roadmap.css';
import Divider from '@material-ui/core/Divider';

import SignalCellularNullIcon from '@material-ui/icons/SignalCellularNull';

export default function Math() {


  return (<>
      <CssBaseline />
        
      <Container maxWidth="md">
          <br/>
      <Divider/>
      <Typography align='center' variant="h4" className='roadtext'>
            Math Roadmap <SignalCellularNullIcon style={{ fontSize: 25 }} /> 
        </Typography>
        <br/>
        <Grid container spacing={2} justifyContent="center">
                <Grid item>

                        <Button
                          variant="contained"
                          color="primary"
                          
                          endIcon={<SignalCellularNullIcon/>}
                        >
                          Write me
                        </Button>
                        </Grid>

                    <Grid item>
                        <Button
                          variant="contained"
                          color='default'
                          
                          endIcon={<SignalCellularNullIcon/>}
                        >
                          DarkMode
                        </Button>
                </Grid>
              </Grid>




      <Typography variant="body1" className='roadtext'>
              This roadmap can give you general knowledges about math and give you a full picture of math system. 
              Of course you can't become Euclid, Hilbert or another great matimatician on the end of this roadmap.
              But if you will do all right i can guarantee that at the end of roadmap you will fell yourself more
              confident in math questions and some formuls like this: <b> αν,X,Y(TX, TY) Iν,Y(TY).</b> not be afraid
              for you anymore, because you can feel ability to take it and understand what author of theory want to say us. 
              
        </Typography>
     


        <Typography variant="body1" className='roadtext'>
             I recommend download picture to yourself (especially if you on mobile device) and just filling themes that you
              learnt with your favorite color :)
            
        </Typography>
        <Typography variant="subtitle2" className='roadtext'>
            <u>Scroll the wheel to zoom in:</u>
        </Typography>


        <PrismaZoom>
        <img
        alt="Math"
        src={math} className='roadmap'/>
        </PrismaZoom>


        </Container>
      
</>
  );
}