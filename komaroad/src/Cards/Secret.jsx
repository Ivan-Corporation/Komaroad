import { useTranslation } from "react-i18next";
import Container from '@material-ui/core/Container';
import secret from '../Images/stuff/secret.png'
import Grid from '@material-ui/core/Grid';
import {
    AwesomeButton,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../Styles/rotatedAnim.css'

  

export default function Secret() {

    const { t } = useTranslation();



    return(
        <Container maxWidth="md">
            <Grid container spacing={12} justifyContent="center"  className='roadtext'>
            <AwesomeButton
            type="secondary"
            size="big"
            href='/'
            ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
            </Grid>
            <Grid container spacing={2} justifyContent="center"  className='secretPadding'>
            
            <img src={secret} className='secret' alt='secret'/>
            </Grid>
        </Container>
    )

}