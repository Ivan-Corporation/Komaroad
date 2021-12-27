import { useTranslation } from "react-i18next";
import Container from '@material-ui/core/Container';
import secret from '../Images/stuff/secret.png'
import Grid from '@material-ui/core/Grid';
import {
    AwesomeButton,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../Styles/rotatedAnim.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import Tooltip from '@mui/material/Tooltip';

import { BrowserRouter as Router, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import monkey from '../Images/stuff/monkey.webp'
import styles from '../Styles/animated-image.module.scss'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  onSnapshot,
  doc
} from "firebase/firestore";
import { useState, useEffect } from "react";

import trophy from '../Images/stuff/trophy.png'



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
    height: '20rem',
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

export default function Trophies() {

    const { t } = useTranslation();

    const classes = useStyles();

  
    const [wobble, setWobble] = React.useState(0)


    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        
    });


  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    setLoader(true)
    setTimeout(async () => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    setLoader(false)
    getPosts();
    
  }, 0);
  }, []);


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
      route: '/further-math',
      img: "/static/media/high_math.dae60a19.jpg",
      name: t('further_math'),
      description: t('further_math_desc'),
      date: t('coming_soon')
    },
    {
      id: 104,
      route: '/further-math',
      img: "/static/media/high_math.dae60a19.jpg",
      name: t('further_math'),
      description: t('further_math_desc'),
      date: t('coming_soon')
    },
  ];
    
    

    return(
      <>

      <Container className={classes.cardGrid} maxWidth="md">
               
                <Typography variant="h4" align="center" paragraph>
                <b>{t('trophies')}</b>
                </Typography>
                <hr/>
  
            <Grid align="center" className={classes.cardsTopPadding} container spacing={4} >
  
            
            
            {!loader ? SpecificCards.map(({ id, route, img, name, description, date }) => (
              
                <Grid item key={id} xs={6} sm={6} md={3}>
                <Link to={route} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <Card className={classes.card}>
                    <CardMedia     
                      className={classes.cardMedia}
                      image={trophy}
                      title={name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography align="center" gutterBottom variant="h5" component="h2">
                      <b>{t(name)}</b>
                      </Typography>
                      <Typography align="center" variant="subtitle2">
                      {t(description)}
                      </Typography>
                    </CardContent>                  
                    <CardActions>
                    <Tooltip title={t('created')} arrow>
                    <Container align="center">
                     <EventAvailableIcon />  <Typography variant="subtitle2">{date}</Typography>
                   </Container>
                   </Tooltip>
                    </CardActions>               
                  </Card>
                  </CardActionArea>  
                  </Link>     
                </Grid>
            )) : [1, 2, 3, 4, 5].map(loading => (
              <Grid item key={loading} xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" width={280} height={318} />
                </Grid>
                ))}
            
            
  
        </Grid>
       
           
          </Container>
      </>
    )
}