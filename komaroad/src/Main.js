import React from 'react';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import logo from './Images/logo-koma.png'
import Brightness7Icon from '@material-ui/icons/Brightness7';

import JS from './Images/icons/javaScript.png';
import MathIcon from './Images/icons/math.jpg';
import ReactIcon from './Images/icons/react.png'; 
import EarthIcon from './Images/icons/earth.png';


import HistoryIcon from './Images/icons/history.png';
import EnglandIcon from './Images/CardsImage/England.png';

import './Styles/PlanetCircle.css';
import './Styles/stars.css';
import './Styles/title.scss';
import './Styles/titleDark.scss';
import Math from './Cards/Math';
import History from './Cards/History';

import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

export default function Main() {

  // Hook for darkMode
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }




  
  const [darkMode, setDarkMode] = useStickyState(false, 'DarkMode?');
 
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })

  

  




  const useStyles = makeStyles((theme) => ({
  
  heroContent: {
    
    padding: theme.spacing(8, 0, 6),
  },
  planet: {
      paddingLeft: '100px'
  },
  lightMode: {
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,136,0,1) 0%, rgba(247,247,247,1) 82%);"
},
  darkMode: {
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(210,90,0,1) 0%, #303030 93%);",    
},
  title: {
    color: '#e6e3e3',
     margin: 'auto',
    fontFamily: 'Montserrat',
    fontSize: '60px',
    textTransform: 'uppercase',

  }

}));
const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

      <CssBaseline />


                        <div className={darkMode ? classes.darkMode : classes.lightMode}>
                        <Container className='stars' maxWidth="sm">
                        <Grid container spacing={3}>





                      <div align='center' className='planet'>


                      <div className="profileImage">

                        <img className="introImage" src={logo} alt="profile"/>
                        <div className="ringCircle innerCircle">
                        <img className="planetCircle" src={HistoryIcon} alt=""/>
                          <img className="planetCircle" src={MathIcon} alt="science"/>
                        </div>
                        <div className="ringCircle outerCircle">
                          <img className="planetCircle" src={ReactIcon} alt=""/>


                          <img className="planetCircle" src={EnglandIcon} alt=""/>     
                          <img className="planetCircle" src={JS} alt="JavaScript"/>
                          <img className="planetCircle" src={EarthIcon} alt=""/>

                        </div>
                      </div>

                      </div>

                      </Grid>

                          <Typography component="h1" variant="h2" align="center" gutterBottom>


                              <h1 className={darkMode ? "center__text1 glitch1 is-glitching1" : "center__text glitch is-glitching"} data-text="Komaroad">Komaroad</h1>


                          </Typography>
                          <Typography variant="h5" align="center" color="textSecondary" paragraph>
                          <b>Learn systematically</b>
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
                                  {darkMode ? <Button
                                        variant="contained"
                                        color='default'
                                        className={classes.button}
                                        endIcon={<Brightness7Icon/>}
                                        onClick={()=> setDarkMode(!darkMode)}
                                      >
                                        LightMode
                                      </Button> 
                                      : 
                                      <Button
                                        variant="contained"
                                        color='secondary'
                                        className={classes.button}
                                        endIcon={<Brightness3Icon/>}
                                        onClick={()=> setDarkMode(!darkMode)}
                                      >
                                        DarkMode
                                      </Button> 
                                    }
                              </Grid>
                            </Grid>
                          </div>
                        </Container>

                      </div>




         <Switch>
             <Route exact path="/math" component={Math}/>
             <Route exact path="/history" component={History}/>

             

             <Route exact path="/" component={MainContent}/>
        </Switch>
      
      <Footer/>


      </ThemeProvider>
    </React.Fragment>

    
  );
}