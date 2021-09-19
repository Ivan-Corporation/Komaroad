import React, { useState, useEffect } from 'react';
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
import Footer from '../Components/Footer';
import history1 from '../Images/Roadmaps/History-roadmap1.png'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import '../Styles/roadmap.css';
import Divider from '@material-ui/core/Divider';

import MoodIcon from '@mui/icons-material/Mood';
import SignalCellularNullIcon from '@material-ui/icons/SignalCellularNull';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageIcon from '@material-ui/icons/Image';
import '../Styles/listItem.scss';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import EuroIcon from '@mui/icons-material/Euro';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';


import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function History() {

  const classes = useStyles();



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
        <b>Description:</b>
        </Typography>
      <Typography variant="subtitle1" className='roadtext'>
      This roadmap can give you general knowledges about math and give you a full picture of math system. 
      Of course you can't become Euclid, Hilbert or another great matimatician on the end of this roadmap. 
      But if you will do all right i can guarantee that at the end of roadmap you will fell yourself more confident in math questions and formuls
       like this: <b>αν,X,Y(TX, TY) Iν,Y(TY) </b>
      not be difficult anymore, because you can feel ability to take it and understand what author of theory want to say us.
              
        </Typography>
     


        <Typography variant="subtitle1" className='roadtext'>
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
        src={history1} className='roadmap'/>
        </TransformComponent>
        </TransformWrapper>

        <Divider/>

        <Typography variant="h5" className='roadtextheader'>
        <b>Appendix:</b>
        </Typography>


        <br/>

          <List className={classes.root}>

          <Divider/>
          <br/>
          <ListItem>

            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <MoodIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Many of the topics in this roadmap may have their own roadmaps that are not much smaller in size.
                            If you have any thoughts on this, write your suggestions and 
                           we will consider them together. Perhaps you can become the author of your own specific roadmap" 
                secondary="(I'm really need help with that)" />
          </ListItem>
          <br/>
          <Divider/>
          <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <LocalPoliceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="All roadmaps have licensed but i don't mind share them if you will give a link on original because i kind man :)" 
            secondary="(If you made new version of roadmap or add some new trees, write me please)" />
          </ListItem>
          <br/>
            <Divider/>
            <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <EuroIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="I'm try not to do Eurocentricity but Europe it's big spot on the body of human history" 
                secondary="(Btw my degree work was about some european military theory but in Asia)"/>
          </ListItem>
          <br/>
          <Divider/>
            <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <AccountTreeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="You need understand that history it's really big, and i'm not included many specific and important themes
             in this roadmap (e.g. History of Religion, History of Arhitecture etc)" 
                secondary="(Maybe i create roadmaps about this specific themes later)"/>
          </ListItem>
          <br/>
          <Divider/>
          <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <SportsEsportsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Maybe it's sound strange but i advice you to play in videogames. Try to be 'Homo Ludens' (Heisenberg) and learning with 
                      pleasure. For that i can recommend you Paradox Games (yep, they are not ideal for learning history but really close to it) like Hearts of Iron,
                      Europa Universalis, Crusader Kings etc. Also i of course recommend you Civilisation (try different parts), Total War (espesially their early games)
                      and many other historical games, but in my humble opinion strategies above are best learning tools between all games."
                secondary={<u>(If you don't like strategy or games at all, don't try to push yourself)</u>} />
          </ListItem>
          <br/>
          <Divider/>
          <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <LibraryBooksIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Now about the books... The biggest problem here is not to drown in a huge amount of information. Just try to find ONE largest book on any topic 
                    (I recommend looking for books not by periods or any area, but by the history of a particular country, the puzzle of their relationship will form in your head over time). Also check the reviews on the books,
                     a lot of historians are biased without realizing it. Therefore, do not take any line or fact in the book as an exact fact." 
                     secondary="(If you don't know exactly book for start learning some country - write me and i help to choose)"
                />
          </ListItem>
          <br/>
          <Divider/>
          <br/>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <HistoryEduIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Historiography... Here you need to understand that some theory was approved over time and disputes can still be held on it,
                     therefore, in addition to studying history itself, you need to study the history of studying a specific historical fact :)" 
                />
          </ListItem>
          <br/>
            <Divider/>





          </List>
          <br/><br/>




        
        {/* <Typography variant="subtitle1" className='roadtext'>
        
        <ol class="gradient-list">
        
        <li>Many of the topics in this roadmap may have their own roadmaps that are not much smaller in size.
                  If you have any thoughts on this, <a href='https://github.com/Ivan-Corporation/Komaroad-Suggestions'>write your suggestions</a> and 
                 we will consider them together. Perhaps you can become the author of your own specific roadmap
                 </li>
              <li>
                All roadmaps have licensed but i don't mind share them if you will give a link on original because i kind man :)
              </li>
            <li>I'm try not to do Eurocentricity but Europe it's big spot on the body of human history</li>
          <li>
            Maybe it's sound strange but i advice you to play in videogames. Try to be 'Homo Ludens' (Heisenberg) and learning with 
            pleasure. For that i can recommend you Paradox Games (yep, they are not ideal for learning history but really close to it) like Hearts of Iron,
            Europa Universalis, Crusader Kings etc. Also i of course recommend you Civilisation (try different parts), Total War (espesially their early games)
            and many other historical games, but in my humble opinion strategies above are best learning tools between all games. <br/>
            <u>If you don't like strategy or games at all, don't try to push yourself</u>
          </li>
          <li>
          Now about the books ... The biggest problem here is not to drown in a huge amount of information. Just try to find ONE largest book on any topic 
          (I recommend looking for books not by periods or any area, but by the history of a particular country, the puzzle of their relationship will form in your head over time). Also check the reviews on the books,
           a lot of historians are biased without realizing it. Therefore, do not take any line or fact in the book as an exact fact.
           <br/>
           <Typography variant="subtitle2">(If you don't know exactly book for start learning some country - write me and i help to choose)</Typography>
          </li>
          
          <li>
          Historiography... Here you need to understand that some theory was approved over time and disputes can still be held on it,
           therefore, in addition to studying history itself, you need to study the history of studying a specific historical fact :)
           </li>
           
             </ol>
             
            <br></br>
        </Typography> */}




        </Container>
      
</>
  );
}