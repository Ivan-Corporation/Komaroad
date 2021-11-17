import { useTranslation } from "react-i18next";

import {
  AwesomeButton,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function Buttons() {

    const { t } = useTranslation();
    
    return(
        <Grid container spacing={2} justifyContent="center">      
        <Grid item>
          <AwesomeButton
            type="secondary"
            size="big"
            href='/'
          ><ArrowBackIcon />{t('all_roadmaps')}</AwesomeButton>
        </Grid>
        <Grid item>
          <AwesomeButtonSocial
            type="primary"
            size="big"
            type="github"
            href="https://github.com/Ivan-Corporation/Komaroad-Suggestions"
          >{t('suggestions')} </AwesomeButtonSocial>
        </Grid>

        </Grid>
    )

}