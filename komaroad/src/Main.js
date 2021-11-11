import React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Footer from './Components/Footer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MainContent from './Components/MainContent';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import logo from './Images/logo-koma.png'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import cookies from 'js-cookie'

import JS from './Images/icons/javaScript.png';
import MathIcon from './Images/icons/math.png';
import ReactIcon from './Images/icons/react.png'; 
import EarthIcon from './Images/icons/earth.png';
import ChemistryIcon from './Images/icons/chemistry.png';
import SigmaIcon from './Images/icons/sigma.png';


import LanguageIcon from '@mui/icons-material/Language';


import HistoryIcon from './Images/icons/history.png';
import EnglandIcon from './Images/CardsImage/England.png';

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


import { styled, alpha } from '@mui/material/styles';

import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import classNames from 'classnames'




export default function Main() {


  //Translation
  const { t } = useTranslation();

  const languages = [
    {
      code: 'fr',
      country_code: 'fr',
      name: 'Français'
    },
    {
      code: 'en',
      country_code: 'gb',
      name: 'English'
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'Русский'
    },
    {
      code: 'de',
      country_code: 'de',
      name: 'Deutsch'
    },
  ]


  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };






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

                        

                      
          
                        <div className='flags'>
                        <Tooltip title={t('language')} arrow>
                          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                            <LanguageIcon style={{width:'32px', height:'32px'}}/>
                          </IconButton>
                        </Tooltip>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                          disableScrollLock={true}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              bgcolor: '#f0eeeb',
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#f0eeeb',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                
                              },
                            },
                          }}
                        >
                          {languages.map(({ code, name, country_code}) => (
                            <Tooltip title={name} arrow placement='left'>
                          <MenuItem key={country_code}>
                            <IconButton
                            className={classNames('dropdown-item')}
                            onClick={() => {
                              i18next.changeLanguage(code)
                            }}
                            
                            >
                             
                              
                      
                            
                            <Button className={`flag-icon flag-icon-${country_code}`}
                            style={{
                              opacity: currentLanguageCode === code ? 1 : 0.3,                             
                            }}
                            >
                            </Button>
                            
                            
                            </IconButton>  
                          </MenuItem>    
                                </Tooltip>                                   
                          ))}
                          
                        </Menu>
                       
                        </div>


                      <div align='center' className='planet'>


                      <div className="profileImage">

                        <img className="introImage" src={logo} alt="profile"/>
                        <div className="ringCircle innerCircle">
                          
                        <a href='/history'>
                        <img className="planetCircle" src={HistoryIcon} alt=""/>
                        </a>
                        
                          <img className="planetCircle" src={MathIcon} alt="science"/>
                         
                        </div>
                        <div className="ringCircle outerCircle">
                          <a href='/react'>
                          <img className="planetCircle" src={ReactIcon} alt="" />
                          </a>

                          <img className="planetCircle" src={EnglandIcon} alt=""/>     
                          <img className="planetCircle" src={JS} alt="JavaScript"/>
                          <img className="planetCircle" src={EarthIcon} alt=""/>
                          
                          <img className="planetCircle" src={SigmaIcon} alt=""/>
                         

                          <img className="planetCircle" src={ChemistryIcon} alt="science"/>
                        </div>
                      </div>

                      </div>

                      </Grid>

                          <Typography component="h1" variant="h2" align="center" gutterBottom>


                              <h1 className={darkMode ? "center__text1 glitch1 is-glitching1" : "center__text glitch is-glitching"} data-text="Komaroad">Komaroad</h1>


                          </Typography>
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
                                    <Tooltip arrow title={t('click_to_change')}>
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
        </Switch>
      
      <Footer/>


      </ThemeProvider>
    </React.Fragment>

    
  );
}