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
import { Trans } from 'react-i18next';


import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';
import { useTranslation } from "react-i18next";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function History() {

  const classes = useStyles();

  const { t } = useTranslation();

  return (<>
      <CssBaseline />
        
      <Container maxWidth="md">
          <br/>
      <Divider/>
      <Typography align='center' variant="h3" className='roadtext'>
           <b>{t('history')}</b> 
        </Typography>
        
        <br/>

        
         <Grid container spacing={2} justifyContent="center">

        <Grid item>
          <AwesomeButton
            type="secondary"
            size="big"
            href='/'
          ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
        </Grid>
        <Grid item>
          <AwesomeButton
            type="primary"
            size="big"
          > <ImageIcon />{t('full_picture')}
          </AwesomeButton>
        </Grid>
        <Grid item>
          <AwesomeButtonSocial
            type="primary"
            size="big"
            type="github"
            href="https://github.com/Ivan-Corporation/Komaroad-Suggestions"
          >{t('suggestions')} </AwesomeButtonSocial>
        </Grid>

        </Grid>



        <Typography variant="h5" className='roadtextheader'>
        <b>{t('description')}</b>
        </Typography>
      <Typography variant="subtitle1" className='roadtext'>
      {t('history_text1')}
              
        </Typography>
     


        <Typography variant="subtitle1" className='roadtext'>
        {t('picture_rec')}     
        </Typography>

     




        <Typography variant="body2" className='roadtext'>
        {t('picture_desc')}      
        </Typography>

        <Typography variant="subtitle2" className='roadtext'>
        <u>{t('picture_desc1')}</u>
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
        <b>{t('appendix')}</b>
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
            <Trans i18nKey="common_appendix1">
            <ListItemText/>
                </Trans>
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
            <Trans i18nKey="common_appendix2">
            <ListItemText />
            </Trans>
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
            <Trans i18nKey="history_appendix1">
            <ListItemText primary="I'm try not to do Eurocentricity but Europe it's big spot on the body of human history" 
                secondary="(Btw my degree work was about some european military theory but in Asia)"/>
                </Trans>
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
            <Trans i18nKey="history_appendix2">
            <ListItemText/>
                </Trans>
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
            <Trans i18nKey="history_appendix3">
            <ListItemText/>
                </Trans>
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
            <Trans i18nKey="history_appendix4">
            <ListItemText/>
                </Trans>
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
            <Trans i18nKey="history_appendix5">
            <ListItemText/>
                </Trans>
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