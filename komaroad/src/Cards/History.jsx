import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import historydown from '../Images/Roadmaps/History-roadmap1.png'
import history1 from '../Images/Roadmaps/History-roadmap1.webp'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import '../Styles/roadmap.css';

import Divider from '@material-ui/core/Divider';

import MoodIcon from '@mui/icons-material/Mood';
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
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';
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

export default function History(props) {
  
  const classes = useStyles();
  const { t } = useTranslation();

  return (<>
      <CssBaseline />
      <Helmet>
                <meta name={t('history')} content={t("history_text1")} />
                <title>{t('history')}</title>
                <link rel="canonical" href="http://komaroad.ru/history" />
            </Helmet>
      <Container maxWidth="md" className='roadtext'>
  
      <Divider/>
      <Typography align='center' variant="h3" className='roadtext'>
           <b>{t('history')}</b> 
        </Typography>
  

        
        <Buttons/>



        <Typography variant="h5" className='roadtextheader' align='center'>
        <b>{t('description')}</b>
        </Typography>
      <Typography variant="body1" className='roadtext'>
      {t('history_text1')}
              
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
            href={historydown}
            target={"_blank"}
          > <ImageIcon />{t('full_picture')}
          </AwesomeButton>
        </Grid>

        <Grid item>
        <a href={historydown} download>
          <AwesomeButton
            type="link"
            size="big"
            download
          > <ImageIcon />{t('download')}
          </AwesomeButton>
          </a>
        </Grid>
        
        </Grid>

        
        
           <hr/>
           <div className='roadmapt'>
           <Zoom>
        <img
        alt="History"
        src={history1} className='roadmap' loading="lazy"/> 
        </Zoom>
        </div>
      
       

        <Divider/>

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
            <ListItemText/>
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
            <ListItemText />
            </Trans>
          </ListItem>
    
            <Divider/>
      
          <ListItem className={classes.paddingList}>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <EuroIcon />
              </Avatar>
            </ListItemAvatar>
            <Trans i18nKey="history_appendix1">
            <ListItemText />
                </Trans>
          </ListItem>
      
          <Divider/>

          <ListItem className={classes.paddingList}>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <AccountTreeIcon />
              </Avatar>
            </ListItemAvatar>
            <Trans i18nKey="history_appendix2">
            <ListItemText/>
                </Trans>
          </ListItem>
     
          <Divider/>
     
          <ListItem className={classes.paddingList}>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <SportsEsportsIcon />
              </Avatar>
            </ListItemAvatar>
            <Trans i18nKey="history_appendix3">
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
            <Trans i18nKey="history_appendix4">
            <ListItemText/>
                </Trans>
          </ListItem>
      
          <Divider/>
    
          <ListItem className={classes.paddingList}>
            <ListItemAvatar>
              <Avatar style={{ width: '45px', height: '45px' }}>
                <HistoryEduIcon />
              </Avatar>
            </ListItemAvatar>
            <Trans i18nKey="history_appendix5">
            <ListItemText/>
                </Trans>
          </ListItem>
        
            <Divider/>





          </List>
       


        </Container>
      
</>
  );
}