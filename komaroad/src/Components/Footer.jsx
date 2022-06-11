import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';
import { RepositoryMetrics } from 'repository-metrics';


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

export default function Footer(props) {

 const classes = useStyles();

 const { t } = useTranslation();

  return ( 
  <div className={classes.footer}>
    
  
  <Container style={{ maxWidth: '25vh', paddingBottom: '5px' }} >

  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
  <Link color="inherit" href='/about'>
  {t('about')} 
  </Link>
  </Typography>

  <Divider variant="middle" />

  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
  <Tooltip title={t('really?')} placement="left" arrow>
  <Link color="inherit" href='/terms'>
  {t('terms')} 
  </Link>
  </Tooltip>
  </Typography>

  <Divider variant="middle" />

  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
  <Link color="inherit" href='https://ivan-corporation.github.io/Komolio/' target='_blank'>
  {t('author')}
  </Link>
  </Typography>

  <Divider variant="middle" />

  </Container>

  <Copyright />
  <div>
      {!props.darkMode? <RepositoryMetrics 
      owner='Ivan-Corporation' 
      repo='Komaroad' 
      theme='light' 
      />
      :
      <RepositoryMetrics 
      owner='Ivan-Corporation' 
      repo='Komaroad' 
      theme='dark' 
      />}
    </div>
</div>
  )
}