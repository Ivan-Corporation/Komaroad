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


import react from '../Images/CardsImage/React.png'
import math from '../Images/CardsImage/math.jpg'
import history from '../Images/CardsImage/history.jpg'
import england from '../Images/CardsImage/England.png'
import comingsoon from '../Images/CardsImage/coming-soon.jpg'

import Math from './../Cards/Math';
import Main from './../Main';



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
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
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


  return (
    <>

    <Container className={classes.cardGrid} maxWidth="md">
          
               
              <Typography variant="h4" align="center" color="" paragraph>
              <b>Most extensive roadmaps</b>
              </Typography>
              <hr/>
              <br/>
              <br/>


          <Grid align="center" container spacing={4}>

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
                    <b>Math</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    Learn Math from zero level to homology and deformation theory
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <IconButton>
                   <FunctionsIcon fontSize="large" />  <Typography variant="subtitle2">Many theory (Hard to learn)</Typography>
                 </IconButton>
                 
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
                    <b>History</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    Development of humanity from the first civilizations to the present day
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <IconButton>
                   <MenuBookIcon fontSize="large" /><Typography variant="subtitle2">First of all</Typography>
                 </IconButton>
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
                    <b>Coming soon</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    The following roadmaps are coming soon. Check the site for updates
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <IconButton>
                   <AccessTimeIcon fontSize="large" /><Typography variant="subtitle2">Give me a time to develop that :)</Typography>
                 </IconButton>
                  </CardActions>

                </Card>
                </CardActionArea> 
                </Link>
              </Grid>



             
              </Grid>


              <br/>
              <br/>
              <br/>
                        
              <Typography variant="h4" align="center" color="" paragraph>
              <b>Specific roadmaps</b>
            </Typography>
              <hr/>
              <br/>
              <br/>
              



                <Grid container spacing={4}>
              
                <Grid item key={cards} xs={12} sm={6} md={4}>
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
                    Open-source front-end JavaScript library for building user interfaces or UI components
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>    
                </CardActionArea>    
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
                    <b>English</b>
                    </Typography>
                    <Typography align="center" variant="subtitle2">
                    Development of humanity from the first civilizations to the present day
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <IconButton>
                   <MenuBookIcon fontSize="large" /><Typography variant="body2">First of all</Typography>
                 </IconButton>
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
                    <b>Coming soon</b>
                    </Typography>
                    <Typography variant="subtitle2">
                    The following roadmaps are coming soon. Check the site for updates
                    </Typography>
                  </CardContent>
                  
                  <CardActions>
                  <IconButton>
                   <AccessTimeIcon fontSize="large" /><Typography variant="subtitle2">Give me a time to develop that :)</Typography>
                 </IconButton>
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
