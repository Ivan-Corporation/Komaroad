import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Avatar, Button } from "@material-ui/core";
import { UserState } from "../UserContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link, List, ListItem, ListItemText } from '@material-ui/core';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Trans } from 'react-i18next';
import '../Styles/roadmap.css';
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';







const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    height: "92%",
  },
  logout: {
    height: "5%",
    width: "80%",
    backgroundColor: "orange",
    margin: 35,

  },
  list: {
    height: "100%",
    width: "100%",
    fontSize: "17px",
  },
  picture: {
    width: 100,
    height: 100,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain",
    '&:hover': {
      width: 106,
      height: 106,
      transition: "all ease .5s",
 },  
  },
  
});



export default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const { user, watchlist, coins } = UserState();

  console.log(watchlist, coins);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);
    toast.warning("Вы вышли из аккаунта!", {
      pauseOnHover: true
  });

    toggleDrawer();
  };

  const { t } = useTranslation();

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title={t('Profile')} arrow>      
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 36,
              width: 36,
              marginLeft: 20,
              marginTop: 5,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          </Tooltip>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email} 
                />
                {t('profile')}
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                > 
                  {user.displayName || user.email}
                </span>               
        


                <Divider />

 
              <List className={classes.list}>

                <Divider/>

                <Link href='https://github.com/Ivan-Corporation/React-Komaroad' target='_blank' color="inherit" underline="none" className='localisation-links'>
                <ListItem >
                  <ListItemAvatar>

                    <div className="">
                    <Avatar style={{ width: '45px', height: '45px' }} className='localisation-icons'>
                      <MailIcon/>
                    </Avatar>
                    </div>

                  </ListItemAvatar>
                  <Trans i18nKey="drawer1">
                  <ListItemText
                      />
                      </Trans>
                </ListItem>
                </Link>

                <Divider/>
                <Link href='https://github.com/Ivan-Corporation/React-Komaroad' target='_blank' color="inherit" underline="none" className='localisation-links'>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ width: '45px', height: '45px' }} className='localisation-icons'>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Trans i18nKey="drawer2">
                  <ListItemText/>
                  </Trans>
                </ListItem>
                </Link>


                  <Divider/>

                <Link href='https://github.com/Ivan-Corporation/React-Komaroad' target='_blank' color="inherit" underline="none" className='localisation-links'>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar style={{ width: '45px', height: '45px' }} className='localisation-icons'>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Trans i18nKey="drawer3">
                  <ListItemText/>
                      </Trans>
                </ListItem>
                </Link>

                <Divider/>     
               

            


              </List>
        </div>
        <Divider />
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                {t('logout')}
              </Button>
          </Drawer>


        </React.Fragment>
      ))}
    </div>
  );
}
