import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import '../Styles/roadmap.css';
import '../Styles/listItem.scss';

import Divider from '@material-ui/core/Divider';

import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

import { useTranslation } from "react-i18next";

import monkey from '../Images/stuff/monkey.webp'
import my_table from '../Images/stuff/my_table.webp'
import cat_chair from '../Images/stuff/cat_chair.webp'

import {
    AwesomeButton,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';

  import styles from '../Styles/animated-image.module.scss'

const useStyles = makeStyles((theme) => ({
  monkey: {
    width: '50%',
    paddingTop: '20px'
  },
  monkey1: {
    width: '50%',
  },
  table: {
      width: '100%',
      paddingBottom: '30px'
  }
}));

export default function About() {

  const classes = useStyles();

  const { t } = useTranslation();

  const [wobble, setWobble] = React.useState(0)


  return (<>
    <CssBaseline />
    
    <Container maxWidth="md" >

      <Grid container spacing={2} justifyContent="center" className='roadtext'>
        
        <Grid item>
          <AwesomeButton
            type="secondary"
            size="big"
            href='/'
          ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
        </Grid>

        </Grid>
 
        
      <Divider />
      <Typography align='center' variant="h3" className='roadtext'>
        <b>{t('about')}</b>
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




      <Typography variant="subtitle1" className='roadtext'>
        {t('about_1')}
      </Typography>
      <Typography variant="subtitle1" className='roadtext'>
        {t('about_2')}
      </Typography>

      <Container align='center' className='roadtext'>
        <img 
        src={cat_chair} 
        className={classes.monkey}
        alt='cat'
        />
        </Container>

        <Typography variant="subtitle1" className='roadtext'>
        {t('about_3')}
      </Typography>

        <Typography align='center' variant="h4" className='roadtext'>
        <b>{t('my_table')}</b>
      </Typography>


      <Container align='center'>
        <img 
        src={my_table} 
        className={classes.table}
        alt='table'
        />
        </Container>


    </Container>

  </>
  );
}