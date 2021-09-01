import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import logo from '../Images/logo-koma.png'


import PythonIcon from '../Images/icons/python.png';
import JavaScriptIcon from '../Images/icons/javaScript.png';
import ReactIcon from '../Images/icons/react.png'; 
import NodeJsIcon from '../Images/icons/nodejs.png';
import BlenderIcon from '../Images/icons/blender.png';
import MongoDBIcon from '../Images/icons/mongo.png';
import CSSIcon from '../Images/icons/css.png';
import KomaIcon from '../Images/icons/koma.png';

import '../Styles/PlanetCircle.css';
import '../Styles/header.css';
import '../Styles/stars.css';
import '../Styles/title.scss';



const useStyles = makeStyles((theme) => ({
  
  heroContent: {
    
    padding: theme.spacing(8, 0, 6),
  },
  planet: {
      paddingLeft: '100px'
  }
  
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




export default function Header() {
  const classes = useStyles();

  return (
        <div className='background'>
          <Container className='stars' maxWidth="sm">
          <Grid container spacing={3}>
              




        <div align='center' className='planet'>
          
          
        <div className="profileImage">
          <img className="introImage" src={logo} alt="profile"/>
          <div className="ringCircle innerCircle">
            <img className="planetCircle" src={PythonIcon} alt="twitter"/>
            <img className="planetCircle" src={JavaScriptIcon} alt="github"/>
          </div>
          <div className="ringCircle outerCircle">
            <img className="planetCircle" src={ReactIcon} alt=""/>
            <img className="planetCircle" src={BlenderIcon} alt=""/>
            <img className="planetCircle" src={KomaIcon} alt=""/>
            <img className="planetCircle" src={CSSIcon} alt=""/>
            <img className="planetCircle" src={MongoDBIcon} alt=""/>
            <img className="planetCircle" src={NodeJsIcon} alt=""/>
            
          </div>
        </div>

        </div>

        </Grid>

            <Typography className='' component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>

            
                <h1 class="center__text glitch is-glitching" data-text="Komaroad">Komaroad</h1>
            

            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Learn systematically
            </Typography>
            <div className={classes.heroButtons}>


              <Grid container spacing={2} justifyContent="center">
                <Grid item>

                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<SendIcon/>}
                        >
                          Write me
                        </Button>
                        </Grid>

                    <Grid item>
                        <Button
                          variant="contained"
                          color='default'
                          className={classes.button}
                          endIcon={<Brightness3Icon/>}
                        >
                          DarkMode
                        </Button>
                </Grid>
              </Grid>
            </div>
          </Container>

        </div>
        )
}
