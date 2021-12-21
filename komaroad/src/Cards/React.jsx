import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import react from '../Images/Roadmaps/react-roadmap.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import '../Styles/roadmap.css';
import '../Styles/listItem.scss';

import LinkIcon from '@mui/icons-material/Link';import Divider from '@material-ui/core/Divider';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImageIcon from '@material-ui/icons/Image';
import MoodIcon from '@mui/icons-material/Mood';
import { Trans } from 'react-i18next';

import {
  AwesomeButton,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';


import { Link, List, ListItem, ListItemText } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Buttons from './../Components/Buttons';


import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Helmet} from 'react-helmet'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
    backgroundColor: theme.palette.background.paper,
    paddingTop: '15px',
    paddingBottom: '15px',
    marginBottom: '50px'
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
            <Helmet>
                <meta name={t('react')} content={t("react_text1")} />
                <title>{t('react')}</title>
                <link rel="canonical" href="http://komaroad.ru/react" />
            </Helmet>
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
            target={"_blank"}
          > <ImageIcon />{t('full_picture')}
          </AwesomeButton>
        </Grid>

        <Grid item>
        <a href={react} download>
          <AwesomeButton
            type="link"
            size="big"
          > <ImageIcon />{t('download')}    
          </AwesomeButton>
          </a>
        </Grid>
        
        </Grid>


        <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <Grid container spacing={2} justifyContent="center" >
            <div className='roadmapbuttons'>
            <ButtonGroup size="large" color="primary">
             <Button onClick={() => zoomIn()} variant="contained" >
             <ZoomInIcon />
             </Button>
             <Button onClick={() => resetTransform()} variant="contained" >
             <ZoomOutMapIcon />
             </Button>
             <Button onClick={() => zoomOut()} variant="contained" >
             <ZoomOutIcon />
             </Button>

             
              
           </ButtonGroup>
           </div>
           </Grid>
           <hr/>
           <div className='roadmapt'>
        <TransformComponent>      
        <img
        alt="React"
        src={react} className='roadmap' loading="lazy"/> 
        </TransformComponent>
        </div>
        </React.Fragment>
        )}
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
      <Link href='https://github.com/Ivan-Corporation/React-Komaroad' target='_blank' color="inherit" underline="none">
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
        </Link>
      <Divider/>

        
    </List>

      
    </Container>

  </>
  );
}