import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';

import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({ 
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    cardsTopPadding: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(12),
    },
    card: {
      height: '24rem',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '62.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
  

export default function MainContent() {

  const { t } = useTranslation();


  const MainCards = [
    {
      id: 1,
      route: "/math",
      img: "/static/media/math.e67552b2.jpg",
      name: t('math'),
      description: t('math_desc'),
      date: '08.30.2021'
    },
    {
      id: 2,
      route: '/history',
      img: "/static/media/history.a65ec4e1.jpg",
      name: t('history'),
      description: t('history_desc'),
      date: '09.11.2021'
    },
    {
      id: 3,
      route: '/',
      img: "/static/media/coming-soon.21529d4b.jpg",
      name: t('coming_soon'),
      description: t('coming_soon_desc'),
      date: t('coming_soon')
    },
  ];


  const SpecificCards = [
    {
      id: 100,
      route: "/react",
      img: "/static/media/React.10582bb6.png",
      name: t('react'),
      description: t('react_desc'),
      date: '10.05.2021'
    },
    {
      id: 101,
      route: '/english',
      img: "/static/media/England.fc98bdd9.jpg",
      name: t('english'),
      description: t('english_desc'),
      date: t('coming_soon')
    },
    {
      id: 102,
      route: '/further-math',
      img: "/static/media/high_math.dae60a19.jpg",
      name: t('further_math'),
      description: t('further_math_desc'),
      date: t('coming_soon')
    },
    {
      id: 103,
      route: '/',
      img: "/static/media/coming-soon.21529d4b.jpg",
      name: t('coming_soon'),
      description: t('coming_soon_desc'),
      date: t('coming_soon')
    },
  ];
  

    const classes = useStyles();


  return (
    <>

    <Container className={classes.cardGrid} maxWidth="md">
             
              <Typography variant="h4" align="center" paragraph>
              <b>{t('most_extensive_roadmaps')}</b>
              </Typography>
              <hr/>

          <Grid align="center" className={classes.cardsTopPadding} container spacing={4} >

          {MainCards.map(({ id, route, img, name, description, date }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
              <Link to={route} style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
                  <CardMedia     
                    className={classes.cardMedia}
                    image={img}
                    title={name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{name}</b>
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                    {description}
                    </Typography>
                  </CardContent>                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon />  <Typography variant="subtitle2">{date}</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>               
                </Card>
                </CardActionArea>  
                </Link>      
              </Grid>
          ))} 
      </Grid>
     
     <Typography variant="h4" align="center" paragraph>
     <b>{t('specific_roadmaps')}</b>
   </Typography>
     <hr/>


            
     <Grid className={classes.cardsTopPadding} container spacing={4}>
     {SpecificCards.map(({ id, route, img, name, description, date }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
              <Link to={route} style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
                  <CardMedia     
                    className={classes.cardMedia}
                    image={img}
                    title={name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{name}</b>
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                    {description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon />  <Typography variant="subtitle2">{date}</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>
                  
                </Card>
                </CardActionArea>  
                </Link>      
              </Grid>
          ))}

          </Grid>    
        </Container>
    </>
  );
}
