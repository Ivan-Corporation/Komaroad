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
import Countdown from 'react-countdown';
import {Helmet} from 'react-helmet'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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




const useStyles = makeStyles((theme) => ({
    table: {
        width: '100%',
        paddingBottom: '30px'
    }
  }));

export default function Settings() {

    const { t } = useTranslation();

    const classes = useStyles();

  
    const [wobble, setWobble] = React.useState(0)




    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        
    });

    
    

    return(
        <Container maxWidth="md">
            <Helmet>
                <meta name={t('profile')} content={t("profile")} />
                <title>{t('profile')}</title>
                <link rel="canonical" href="http://komaroad.ru/secret" />
            </Helmet>
            <Grid container spacing={12} justifyContent="center"  className='roadtext'>
            <AwesomeButton
            type="secondary"
            size="big"
            href='/'
            ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
            </Grid>
            <Grid container spacing={12} justifyContent="center">
                <Divider />
             
              <Typography align='center' variant="h3" className='roadtext'>
                <b>{user.email}</b>
                
              </Typography>


            <Container align='center' className='roadtext'>
                <img 
                className={styles.image}
                src={monkey} 
                onClick={() => setWobble(1)}
                onAnimationEnd={() => setWobble(0)}
                wobble={wobble}
                alt='monkey'
                />
                </Container> 
                
            </Grid>
        </Container>
    )

}