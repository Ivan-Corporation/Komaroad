import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import '../Styles/roadmap.css';
import '../Styles/listItem.scss';

import Divider from '@material-ui/core/Divider';

import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

import { useTranslation } from "react-i18next";


import monkey from '../Images/stuff/monkey.jpg'
import my_table from '../Images/stuff/my_table.jpg'
import cat_chair from '../Images/stuff/cat_chair.png'


import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';
  import ImageIcon from '@material-ui/icons/Image';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
  },
  monkey: {
    width: '50%',
    paddingTop: '20px'
  },
  monkey1: {
    width: '50%',
  },
  table: {
      width: '100%'
  }
}));






export default function About() {

  const classes = useStyles();

  const { t } = useTranslation();

  return (<>
    <CssBaseline />
    
    <Container maxWidth="md">
      <br />
      <Grid container spacing={2} justifyContent="center">
        
        <Grid item>
          <AwesomeButton
            type="secondary"
            size="big"
            href='/'
          ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
        </Grid>

        </Grid>
        <br/>
        
      <Divider />
      <Typography align='center' variant="h3" className='roadtext'>
        <b>{t('about')}</b>
      </Typography>

      <br/>
       
    <Container align='center' >
        <img src={monkey} className={classes.monkey1}/>
        </Container> 




      <Typography variant="subtitle1" className='roadtext'>
        {t('about_1')}
      </Typography>
      <Typography variant="subtitle1" className='roadtext'>
        {t('about_2')}
      </Typography>

      <Container align='center' >
        <img src={cat_chair} className={classes.monkey}/>
        </Container>

        <Typography variant="subtitle1" className='roadtext'>
        {t('about_3')}
      </Typography>
        <br/>
        <Typography align='center' variant="h4" className='roadtext'>
        <b>{t('my_table')}</b>
      </Typography>

      <br/>

      <Container align='center' >
        <img src={my_table} className={classes.table}/>
        </Container>

        <br/>
        <br/>
        <br/>
        
    </Container>

  </>
  );
}