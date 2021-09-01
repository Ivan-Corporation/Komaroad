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



const useStyles = makeStyles((theme) => ({
  
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Header() {
  const classes = useStyles();

  return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Grid container spacing={3}>
              




        <Container align='center'>
          <img src={logo} style={{ height: '20vh', }}/>
        </Container>






        </Grid>

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Komaroad
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
