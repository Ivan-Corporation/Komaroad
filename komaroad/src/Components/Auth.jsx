import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import '../Styles/auth.css';

import { useTranslation } from "react-i18next";



export default function Auth() {


    const { t } = useTranslation();

    const [auth, setAuth] = React.useState(false);


    return (
    <div className='auth'>

    {auth ? 
    <Tooltip title={t('Profile')} arrow>
      <IconButton size="small" sx={{ ml: 2 }}>
        <AccountCircleIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
    :
    <Tooltip title={t('Register')} arrow>
      <IconButton size="small" sx={{ ml: 2 }}>
        <PersonAddIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
    }

    </div>
    )
}