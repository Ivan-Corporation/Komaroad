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
import history from '../Images/Roadmaps/History-roadmap.png'


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import '../Styles/roadmap.css';
import Divider from '@material-ui/core/Divider';

import SignalCellularNullIcon from '@material-ui/icons/SignalCellularNull';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageIcon from '@material-ui/icons/Image';
import '../Styles/listItem.scss';



import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';



export default function History() {


  return (<>
      <CssBaseline />
        
      <Container maxWidth="md">
          <br/>
      <Divider/>
      <Typography align='center' variant="h3" className='roadtext'>
           <b>History </b> 
        </Typography>
        
        <br/>

        
        <Grid container spacing={2} justifyContent="center">
       
                <Grid item>
                <AwesomeButton
                 type="secondary"
                 size="big"
                 href='/'
                 ><ArrowBackIcon/>All Roadmaps</AwesomeButton>                                        
                        </Grid>
                    <Grid item>
                    <AwesomeButton
                     type="primary"
                     size="big"
                     > <ImageIcon/> Full picture 
                     </AwesomeButton>
                </Grid>
                    <Grid item>
                    <AwesomeButtonSocial
                     type="primary"
                     size="big"
                     type="github"
                     href="https://github.com/Ivan-Corporation/Komaroad-Suggestions"
                     >Suggestions </AwesomeButtonSocial>
                </Grid>

              </Grid>



        <Typography variant="h5" className='roadtextheader'>
          Description:
        </Typography>
      <Typography variant="body1" className='roadtext'>
      This roadmap can give you general knowledges about math and give you a full picture of math system. 
      Of course you can't become Euclid, Hilbert or another great matimatician on the end of this roadmap. 
      But if you will do all right i can guarantee that at the end of roadmap you will fell yourself more confident in math questions and formuls
       like this: <b>αν,X,Y(TX, TY) Iν,Y(TY) </b>
      not be difficult anymore, because you can feel ability to take it and understand what author of theory want to say us.
              
        </Typography>
     


        <Typography variant="body1" className='roadtext'>
             I recommend download picture to yourself (especially if you on mobile device) and just filling themes that you
              learnt with your favorite color :) <b>BUT if you want to place roadmap in public place, please made a link on original
              beacuse all roadmaps licensed!</b>      
        </Typography>

        <Typography variant="body2" className='roadtext'>
        (If your picture freezes when scaling, don't worry, it's just that the picture is very large and the rendering takes place at different scales)      
        </Typography>

        <Typography variant="subtitle2" className='roadtext'>
            <u>Scroll the wheel to zoom in or open full picture:</u>
        </Typography>


        <TransformWrapper>
        <TransformComponent>
        <img
        alt="Math"
        src={history} className='roadmap'/>
        </TransformComponent>
        </TransformWrapper>

        <Divider/>

        <Typography variant="h5" className='roadtextheader'>
        Appendix:
        </Typography>
        <Typography variant="body1" className='roadtext'>
        <ol class="gradient-list">
        <li>I'm try not to do Eurocentricity but Europe it's big spot on the body of human history</li>
          <li></li>
          <li></li>

               <li>Many of the topics in this roadmap may have their own roadmaps that are not much smaller in size.
                  If you have any thoughts on this, <a href='https://github.com/Ivan-Corporation/Komaroad-Suggestions'>write your suggestions</a> and 
                 we will consider them together. Perhaps you can become the author of your own specific roadmap
                 </li>
              <li>All roadmaps have licensed but i don't mind share them if you will give a link on original because i kind man :)</li>
              




             </ol>
            <br></br>
        </Typography>
        </Container>
      
</>
  );
}