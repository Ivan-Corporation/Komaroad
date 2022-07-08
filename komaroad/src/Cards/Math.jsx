import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import mathdown from '../Images/Roadmaps/Math-roadmap.png'
import math from '../Images/Roadmaps/Math-roadmap.webp'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import '../Styles/roadmap.css';
import '../Styles/listItem.scss';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HardwareIcon from '@mui/icons-material/Hardware';
import Divider from '@material-ui/core/Divider';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FunctionsIcon from '@mui/icons-material/Functions';

import MoodIcon from '@mui/icons-material/Mood';
import { Trans } from 'react-i18next';

import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Buttons from '../Components/Buttons'
import {
  AwesomeButton,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

import ImageIcon from '@material-ui/icons/Image';

import {Helmet} from 'react-helmet'


import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
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
                <meta name={t('math')} content={t("math_text1")} />
                <title>{t('math')}</title>
                <link rel="canonical" href="http://komaroad.ru/math" />
            </Helmet>
    <Container maxWidth="md" className={classes.paddingBr}>
    
      <Divider />
      <Typography align='center' variant="h3" className='roadtext'>
        <b>{t('math')}</b>
      </Typography>


      <Buttons/>



      <Typography variant="h5" className='roadtextheader' align='center'>
        <b>{t('description')}</b>
      </Typography>
      <Typography variant="body1" className='roadtext'>
        {t('math_text1')}
      </Typography>



      <Typography variant="subtitle2" className='roadtext'>
      {t('picture_rec')}
        
      </Typography>
      <Typography variant="subtitle2" className='roadtext'>
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
            href={mathdown}
            target={"_blank"}
          > <ImageIcon />{t('full_picture')}
          </AwesomeButton>
        </Grid>

        <Grid item>
        <a href={mathdown} download>
          <AwesomeButton
            type="link"
            size="big"
          > <ImageIcon />{t('download')}
          </AwesomeButton>
          </a>
        </Grid>
        
        </Grid>
       

        <Zoom>
           <hr/>
           <div className='roadmapt'>
        <img
        alt="Math"
        src={math} className='roadmap' loading="lazy"/> 
        </div>
        </Zoom>



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
            <FunctionsIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="math_appendix3">
        <ListItemText/>
            </Trans>
      </ListItem>
   
      <Divider/>
  
      <ListItem className={classes.paddingList}>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <LibraryBooksIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="math_appendix4">
        <ListItemText/>
            </Trans>
      </ListItem>
   
      <Divider/>
     
      <ListItem className={classes.paddingList}>
        <ListItemAvatar>
          <Avatar style={{ width: '45px', height: '45px' }}>
            <HardwareIcon />
          </Avatar>
        </ListItemAvatar>
        <Trans i18nKey="math_appendix5">
        <ListItemText/>
            </Trans>
      </ListItem>
   
        <Divider/>
        
    </List>

    </Container>

  </>
  );
}