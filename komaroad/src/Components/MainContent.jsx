import React from 'react';
import Button from '@material-ui/core/Button';
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

import FunctionsIcon from '@material-ui/icons/Functions';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import react from '../Images/CardsImage/React.png'
import math from '../Images/CardsImage/math.jpg'
import history from '../Images/CardsImage/history.jpg'
import england from '../Images/CardsImage/England.png'
import comingsoon from '../Images/CardsImage/coming-soon.jpg'
import high_math from '../Images/CardsImage/high_math.jpg'

import Math from './../Cards/Math';
import Main from './../Main';
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';


import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
      height: '27rem',
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
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  
    





export default function MainContent() {

    const classes = useStyles();

    const { t } = useTranslation();

  return (
    <>

    <Container className={classes.cardGrid} maxWidth="md">


               
              <Typography variant="h4" align="center" color="" paragraph>
              <b>{t('most_extensive_roadmaps')}</b>
              </Typography>
              <hr/>

          <Grid align="center" className={classes.cardsTopPadding} container spacing={4} >

            {/* {cards.map((card) => ( */}

              
              <Grid item key={cards} xs={12} sm={6} md={4}>
              <Link to="/math" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={math}
                    title="Math"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('math')}</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    {t('math_desc')}
                    </Typography>
                  </CardContent>

                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon />  <Typography variant="subtitle2">08.30.2021</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>
                  

                </Card>
                </CardActionArea>  
                </Link>      
              </Grid>
              


              <Grid item key={cards} xs={12} sm={6} md={4}>
              <Link to="/history" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={history}
                    title="History"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('history')}</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    {t('history_desc')}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="subtitle2">09.10.2021</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>

                </Card>
                </CardActionArea> 
                </Link>
              </Grid>




              <Grid item key={cards} xs={12} sm={6} md={4}>
              <Link to="/" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={comingsoon}
                    title="comingsoon"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('coming_soon')}</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    {t('coming_soon_desc')}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="subtitle2">{t('coming_soon')}</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>

                </Card>
                </CardActionArea> 
                </Link>
              </Grid>



             
              </Grid>
     
              <Typography variant="h4" align="center" color="" paragraph>
              <b>{t('specific_roadmaps')}</b>
            </Typography>
              <hr/>




                <Grid className={classes.cardsTopPadding} container spacing={4}>
              
                <Grid item key={cards} xs={12} sm={6} md={4}>
                <Link to="/react" style={{ textDecoration: 'none' }}>
                <CardActionArea>
                <Card align="center" className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={react}
                    title="React"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>React</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    {t('react_desc')}
                    </Typography>
                  </CardContent>
                   <CardActions>
                   <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="body2">09.10.2021</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>
                </Card>    
                </CardActionArea>   
                </Link> 
              </Grid>


              <Grid item key={cards} xs={12} sm={6} md={4}>
              <CardActionArea>
                <Card className={classes.card}>
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={england}
                    title="History"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('english')}</b>
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                    {t('english_desc')}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="body2">09.10.2021</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>

                </Card>
                </CardActionArea> 
              </Grid>


              
              <Grid item key={cards} xs={12} sm={6} md={4}>
              <CardActionArea>
                <Card className={classes.card}>
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={high_math}
                    title="History"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('further_math')}</b>
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                    {t('further_math_desc')}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="body2">10.06.2021</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>

                </Card>
                </CardActionArea> 
              </Grid>




              <Grid item key={cards} xs={12} sm={6} md={4}>
              <Link to="/" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <Card className={classes.card}>
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={comingsoon}
                    title="comingsoon"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    <b>{t('coming_soon')}</b>
                    </Typography>
                    <Typography align='center' variant="subtitle2">
                    {t('coming_soon_desc')}
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <Tooltip title={t('created')} arrow>
                  <IconButton>
                   <EventAvailableIcon /><Typography variant="subtitle2">{t('coming_soon')}</Typography>
                 </IconButton>
                 </Tooltip>
                  </CardActions>

                </Card>
                </CardActionArea> 
                </Link>
              </Grid>





              </Grid>
            
          
        </Container>
        

    </>
  );
}
