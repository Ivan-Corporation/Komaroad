import { useTranslation } from "react-i18next";
import Container from '@material-ui/core/Container';
import secret from '../Images/stuff/secret.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    AwesomeButton,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    secret: {
      width: '50%',
      paddingTop: '60px',
      paddingBottom: '60px',
    },
  }));
  

export default function Secret() {

    const { t } = useTranslation();

    const classes = useStyles();


    return(
        <Container maxWidth="md" className='roadtext'>
            <Grid container spacing={12} justifyContent="center">
            <AwesomeButton
            type="secondary"
            size="big"
            href='/'
            ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
            
            <img src={secret} className={classes.secret} alt='secret'/>
            </Grid>
        </Container>
    )

}