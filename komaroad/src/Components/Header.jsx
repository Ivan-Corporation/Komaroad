import {React, useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import logo from '../Images/logo-koma.png'


import JS from '../Images/icons/javaScript.png';
import MathIcon from '../Images/icons/math.jpg';
import ReactIcon from '../Images/icons/react.png'; 
import EarthIcon from '../Images/icons/earth.png';


import HistoryIcon from '../Images/icons/history.png';
import EnglandIcon from '../Images/CardsImage/England.png';

import '../Styles/PlanetCircle.css';
// import '../Styles/header.css';
import '../Styles/stars.css';
import '../Styles/title.scss';







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

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




export default function Header(props) {

  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })
  


  const classes = useStyles();



  return (
    <ThemeProvider theme={theme}>
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

            
                <h1 class="center__text glitch is-glitching" data-text="Komaroad">Komaroad</h1>
            

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
                        <Button
                          variant="contained"
                          color='default'
                          className={classes.button}
                          endIcon={<Brightness3Icon/>}
                          onClick={()=> setDarkMode(!darkMode)}
                        >
                          DarkMode
                        </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          
        </div>
        </ThemeProvider>
        )
}
