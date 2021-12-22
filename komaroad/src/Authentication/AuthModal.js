import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Tab, Tabs, AppBar, Box } from "@material-ui/core";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { UserState } from "../UserContext";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Divider from '@mui/material/Divider';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';





const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 450,
    backgroundColor: theme.palette.background.paper,
    color: "white",
    borderRadius: 10,
  },
  google: {
    padding: 24,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: 20,
  },
  remember: {
    textAlign: 'left',
    color: '#6495ED',
    paddingTop: '3px'
  }
}));

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Успех", {
          pauseOnHover: true
      }); 

        handleClose();
      })
      .catch((error) => {
        toast.error("Гугл не прошёл", {
          pauseOnHover: true
      }); 
        return;
      });
  };

  const signInWithGithub = async () => {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
      handleClose();
      toast.success("Success", {
        pauseOnHover: true
    });
  }



  const { t } = useTranslation();


  return (
    <div>
      <ToastContainer 
    position="top-center"
    autoClose={5000}
    />
      <Tooltip title={t('Login')} arrow>
      <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }}>
        <PersonAddIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{               
                color: "white",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >                

                <Tab icon={<LoginIcon />} label="Войти" />
                <Tab icon={<LogoutIcon />} label="Регистрация" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login handleClose={handleClose} />}        
            {value === 1 && <Signup handleClose={handleClose} />}
            <Grid container className={classes.google}>
                <Grid item xs className={classes.remember}>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                </Grid>
                <Grid >
                <IconButton onClick={signInWithGoogle} size="small" sx={{ ml: 1 }}>
                  <GoogleIcon style={{width:'36px', height:'36px'}} color='primary'/>
                </IconButton>
                <IconButton onClick={signInWithGithub} size="small" sx={{ ml: 1 }}>
                  <GitHubIcon style={{width:'36px', height:'36px'}} color='primary'/>
                </IconButton>
                </Grid>
              </Grid>       
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
