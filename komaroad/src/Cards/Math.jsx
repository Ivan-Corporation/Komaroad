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
import Link from '@material-ui/core/Link';
import Footer from '../Components/Footer';
import math from '../Images/Roadmaps/Math-roadmap.png'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


import '../Styles/roadmap.css';
import '../Styles/listItem.scss';



import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HardwareIcon from '@mui/icons-material/Hardware';
import Divider from '@material-ui/core/Divider';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FunctionsIcon from '@mui/icons-material/Functions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageIcon from '@material-ui/icons/Image';
import MoodIcon from '@mui/icons-material/Mood';
import { Trans } from 'react-i18next';

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useTranslation } from "react-i18next";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
  },
}));






export default function Math() {

  const classes = useStyles();

  const { t } = useTranslation();

  return (<>
    <CssBaseline />

    <Container maxWidth="md">
      <br />
      <Divider />
      <Typography align='center' variant="h3" className='roadtext'>
        <b>{t('math')}</b>
      </Typography>

      <br />


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
        {t('math_text1')}
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
            src={math} className='roadmap' />
        </TransformComponent>
      </TransformWrapper>


      <Divider />

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
        <ListItemText
            />
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
        <ListItemText/>
        </Trans>
      </ListItem>
      
      <br/>
        <Divider/>
        <br/>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <FunctionsIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="math_appendix3">
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
        <Trans i18nKey="math_appendix4">
        <ListItemText/>
            </Trans>
      </ListItem>
      <br/>
      <Divider/>
      <br/>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <HardwareIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="math_appendix5">
        <ListItemText/>
            </Trans>
      </ListItem>
      <br/>
        <Divider/>
        




    </List>

        <br/>
        <br/>
      
    </Container>

  </>
  );
}