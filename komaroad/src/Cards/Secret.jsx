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
import Countdown from 'react-countdown';
import {Helmet} from 'react-helmet'

  

export default function Secret() {

    const { t } = useTranslation();

    const Completionist = () => <h2>Something inside the egg!...</h2>;

    return(
        <Container maxWidth="md">
            <Helmet>
                <meta name={t('really?')} content={t("really?")} />
                <title>{t('really?')}</title>
                <link rel="canonical" href="http://komaroad.ru/secret" />
            </Helmet>
            <Grid container spacing={12} justifyContent="center" className='roadtext'>
            <AwesomeButton
            type="secondary"
            size="big"
            href='/'
            ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
            </Grid>

            <Grid container spacing={12} justifyContent="center">
            <h1>
            <Countdown date='2021-12-29T00:00:00'>
                <Completionist />
            </Countdown>
            </h1>
            </Grid>

            <Grid container spacing={2} justifyContent="center"  className='secretPadding'>

            
            
            <img src={secret} className='secret' alt='secret'/>

            
            </Grid>
        </Container>
    )

}