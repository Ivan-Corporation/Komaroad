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
import Divider from '@material-ui/core/Divider';
import { useTranslation } from "react-i18next";





function Copyright() {



    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/Ivan-Corporation">
          Komaroad
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
      },
  }));

  

export default function Footer() {

 const classes = useStyles();

 const { t } = useTranslation();


  return ( 
  <div className={classes.footer}>
    
    <Container style={{ maxWidth: '25vh' }}>
<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
  <Link color="inherit" href='https://ivan-corporation.github.io/Komolio/'>
    {t('about')} 
    </Link><Divider variant="middle" />
  <Link color="inherit" href='https://ivan-corporation.github.io/Komolio/'>
  {t('terms')} 
    </Link><Divider variant="middle" />
  <Link color="inherit" href='https://ivan-corporation.github.io/Komolio/'>
  {t('author')}
    </Link><Divider variant="middle" />
</Typography>


</Container>
<br></br>
<Copyright />


</div>
  )
}