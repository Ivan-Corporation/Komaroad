import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Styles/auth.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from "react-i18next";
import InputAdornment from '@mui/material/InputAdornment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider 
} from "firebase/auth";
import { auth } from "../firebase";




export default function Auth() {

    const { t } = useTranslation();

  

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);

    const handleClickOpenLogin = () => {
      setOpenLogin(true);
      setOpenRegister(false);
    };
  
    const handleCloseLogin = () => {
      setOpenLogin(false);
    };

    const handleClickOpenRegister = () => {
      setOpenRegister(true);
      setOpenLogin(false);
    };
  
    const handleCloseRegister = () => {
      setOpenRegister(false);
    };

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const logout = async () => {
      await signOut(auth);
    };



    // Google
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
    }


    //Github
    const signInWithGithub = async () => {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
    }



    return (
    <div className='auth'>

    {user ? 
    <Tooltip title={t('Profile')} arrow>     
      <IconButton onClick={logout} size="small" sx={{ ml: 2 }}>
        <AccountCircleIcon style={{width:'36px', height:'36px'}}/>{user?.email}
      </IconButton>
    </Tooltip>
    :
    <Tooltip title={t('Login')} arrow>
      <IconButton onClick={handleClickOpenLogin} size="small" sx={{ ml: 2 }}>
        <PersonAddIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
    }

  
      <Dialog open={openLogin} onClose={handleCloseLogin} >
        <DialogTitle className='dialogbg'>Login</DialogTitle>
        <DialogContent className='dialogbg'>
          <DialogContentText>
            Login 
          </DialogContentText>
          
           

          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
				        value={loginEmail}
				        onChange={(e) => setLoginEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
				        value={loginPassword}
				        onChange={(e) => setLoginPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>           
              <Grid container>
                <Grid item xs>
                <IconButton onClick={signInWithGoogle} size="small" sx={{ ml: 2 }}>
                  <PersonAddIcon style={{width:'36px', height:'36px'}}/>
                </IconButton>
                <IconButton onClick={signInWithGithub} size="small" sx={{ ml: 2 }}>
                  <EmojiObjectsIcon style={{width:'36px', height:'36px'}}/>
                </IconButton>
                </Grid>
                
              </Grid>           
              

        </DialogContent>
        <DialogActions className='dialogbg'>
          <Button variant="contained" size="medium" style={{backgroundColor: 'orange'}} onClick={handleClickOpenRegister} endIcon={<ArrowForwardIosIcon />}>Fast register</Button>
        </DialogActions>
      </Dialog>




      {/* Register */}
      



      <Dialog open={openRegister} onClose={handleCloseRegister} >
        <DialogTitle className='dialogbg'>Register</DialogTitle>
        <DialogContent className='dialogbg'>
          <DialogContentText>
            Register
          </DialogContentText>
          

          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
				        value={registerEmail}
				        onChange={(e) => setRegisterEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
				        value={registerPassword}
				        onChange={(e) => setRegisterPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}	
                onClick={register}			
              >
                Sign Up
              </Button>
              


        </DialogContent>
        <DialogActions className='dialogbg'>
          <Button variant="contained" size="medium" style={{backgroundColor: 'orange'}} onClick={handleClickOpenLogin} endIcon={<ArrowForwardIosIcon />}>Login</Button>
        </DialogActions>
      </Dialog>


    </div>
    )
}