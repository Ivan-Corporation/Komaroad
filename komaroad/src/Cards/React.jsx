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
import react from '../Images/Roadmaps/react-roadmap.png'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


import '../Styles/roadmap.css';
import '../Styles/listItem.scss';



import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkIcon from '@mui/icons-material/Link';import Divider from '@material-ui/core/Divider';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import GitHubIcon from '@mui/icons-material/GitHub';
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
import Buttons from './../Components/Buttons';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
  },
  paddingBr: {
    paddingTop: theme.spacing(3),
  },
  paddingList: {
    paddingTop: '25px',
    paddingBottom: '25px',

  }
}));






export default function Math() {

  const classes = useStyles();

  const { t } = useTranslation();

  return (<>
    <CssBaseline />

    <Container maxWidth="md" className='roadtext'>

      <Divider />
      <Typography align='center' variant="h3" className='roadtext'>
        <b>{t('react')}</b>
      </Typography>

 

      <Buttons/>



      <Typography variant="h5" className='roadtextheader' align='center'>
        <b>{t('description')}</b>
      </Typography>
      <Typography variant="body1" className='roadtext'>
        {t('react_text1')}
      </Typography>



      <Typography variant="subtitle2" className='roadtext'>
      {t('picture_rec')}
        
      </Typography>
      <Typography variant="body2" className='roadtext'>
      {t('picture_desc')}
        
      </Typography>

      <Typography variant="subtitle2" className='roadtext' align='center'>
        <u>{t('picture_desc1')}</u>
      </Typography>


        <Grid container spacing={2} justifyContent="center" className='roadtext'>

        <Grid item>
          <AwesomeButton
            type="primary"
            size="big"
            href={react}
          > <ImageIcon />{t('full_picture')}
          </AwesomeButton>
        </Grid>
        
        </Grid>


      <TransformWrapper>
        <TransformComponent>
          <img
            alt="React"
            src={react} className='roadmap' />
        </TransformComponent>
      </TransformWrapper>


      <Divider />

      <Typography variant="h5" className='roadtextheader'>
        <b>{t('appendix')}</b>
      </Typography>


      <List className={classes.root}>
      
      <Divider/>

      <ListItem className={classes.paddingList}>
      
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

      <Divider/>

      <ListItem className={classes.paddingList}>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <LocalPoliceIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="common_appendix2">
        <ListItemText/>
        </Trans>
      </ListItem>
      

        <Divider/>

      <ListItem className={classes.paddingList}>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="react_appendix3">
        <ListItemText/>
            </Trans>
      </ListItem>

      <Divider/>

      <ListItem className={classes.paddingList}>
        <ListItemAvatar >
          <Avatar style={{ width: '45px', height: '45px' }} >
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="react_appendix4"> 
        <ListItemText/>
            </Trans>
      </ListItem>

      <Divider/>

        
    </List>

      
    </Container>

  </>
  );
}