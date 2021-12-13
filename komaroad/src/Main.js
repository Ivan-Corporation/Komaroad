import React, { Suspense } from 'react';
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
import FallbackLoading from './FallbackLoading';

import './Styles/PlanetCircle.css';
import './Styles/stars.css';
import './Styles/flags.css';
import './Styles/title.scss';
import './Styles/titleDark.scss';

// for some reasone don't work with React.lazy
import Terms from './Components/Terms';
// Not this)
import About from './Components/About';



import { BrowserRouter as Switch,Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { useTranslation } from "react-i18next";
import LanguageFlags from './Components/LanguageFlags';
import KomaSphere from './Components/KomaSphere';
import {Helmet} from 'react-helmet'
import Auth from './Components/Auth';



export default function Main() {

  const Math = React.lazy(() => import('./Cards/Math'));
  const History = React.lazy(() => import('./Cards/History'));
  const ReactR = React.lazy(() => import('./Cards/React'));

  const Secret = React.lazy(() => import('./Cards/Secret'));



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
            <Helmet>
                <meta name='Komaroad' content={t("about_1")} />
                <title>Komaroad</title>
                <link href="http://komaroad.ru" />
            </Helmet>
                        <div className={darkMode ? classes.darkMode : classes.lightMode}>
                        <Container className='stars' maxWidth="sm">
                        <Grid container spacing={3}>

                        <Auth/>
                        
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
         <Suspense fallback={FallbackLoading}>
         <Switch>
             <Route exact path="/math" component={Math}/>             
             <Route exact path="/history" component={History}/>
             <Route exact path="/react" component={ReactR}/>

             <Route exact path="/about" component={About}/>
             <Route exact path="/terms" component={Terms}/>

             <Route exact path="/" component={MainContent}/>

             <Route exact path='/secret' component={Secret}/>
        </Switch>
        </Suspense>
      <Footer/>
      
      </ThemeProvider>
    </React.Fragment>   
  );
}