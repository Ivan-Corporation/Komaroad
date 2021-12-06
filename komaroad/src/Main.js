import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import './Styles/PlanetCircle.css';
import './Styles/stars.css';
import './Styles/flags.css';
import './Styles/title.scss';
import './Styles/titleDark.scss';
import Math from './Cards/Math';
import History from './Cards/History';
import ReactR from './Cards/React';
import About from './Components/About';
import Terms from './Components/Terms';
import Secret from './Cards/Secret';

import { BrowserRouter as Switch,Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { useTranslation } from "react-i18next";
import LanguageFlags from './Components/LanguageFlags';
import KomaSphere from './Components/KomaSphere';


export default function Main() {


  //Translation
  const { t } = useTranslation();

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

  const [darkMode, setDarkMode] = useStickyState(true, 'DarkMode?');
 
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
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(210,90,0,1) 0%, #303030 92%);",    
},
  title: {
    color: '#e6e3e3',
     margin: 'auto',
    fontFamily: 'Montserrat',
    fontSize: '60px',
    textTransform: 'uppercase',
  },

}));

const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

      <CssBaseline />

                        <div className={darkMode ? classes.darkMode : classes.lightMode}>
                        <Container className='stars' maxWidth="sm">
                        <Grid container spacing={3}>

                        <LanguageFlags/>

                      <KomaSphere/>

                      </Grid>

                          <h1 className={darkMode ? "center__text1 glitch1 is-glitching1" : "center__text glitch is-glitching"} align="center" data-text="Komaroad">Komaroad</h1>

                        
                          <Typography variant="h5" align="center" color="textSecondary" paragraph>
                          <b>{t('learn_systematically')}</b>
                          </Typography>
                          <div className={classes.heroButtons}>

                            <Grid container spacing={2} justifyContent="center">
                              <Grid item>
                              <Tooltip title="Telegram" arrow>
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<SendIcon/>}
                                        href='https://t.me/KomarIvan'
                                      >
                                        {t('write_me')}
                                      </Button>
                                      </Tooltip>
                                      </Grid>

                                  <Grid item>
                                    <Tooltip title={t('click_to_change')} arrow>
                                  {darkMode ? <Button
                                        variant="contained"
                                        color='default'
                                        className={classes.button}
                                        endIcon={<Brightness7Icon/>}
                                        onClick={()=> setDarkMode(!darkMode)}
                                      >
                                        {t('light_mode')}
                                      </Button> 
                                      : 
                                      <Button
                                        variant="contained"
                                        color='secondary'
                                        className={classes.button}
                                        endIcon={<Brightness3Icon/>}
                                        onClick={()=> setDarkMode(!darkMode)}
                                      >
                                        {t('dark_mode')}
                                      </Button> 
                                    }
                                    </Tooltip>
                              </Grid>
                            </Grid>
                          </div>
                        </Container>

                      </div>

         <Switch>
             <Route exact path="/math" component={Math}/>             
             <Route exact path="/history" component={History}/>
             <Route exact path="/react" component={ReactR}/>

             <Route exact path="/about" component={About}/>
             <Route exact path="/terms" component={Terms}/>

             <Route exact path="/" component={MainContent}/>

             <Route exact path='/secret' component={Secret}/>
        </Switch>

      <Footer/>
      
      </ThemeProvider>
    </React.Fragment>   
  );
}