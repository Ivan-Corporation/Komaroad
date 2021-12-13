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
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';




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
        handleCloseRegister()
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
        handleCloseLogin()
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
      handleCloseLogin()
    }


    //Github
    const signInWithGithub = async () => {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
      handleCloseLogin()
    }

    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    // handle for profile menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };





    return (
    <div className='auth'>

    {user ? 
    <Tooltip title={t('Profile')} arrow>     
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <AccountCircleIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
    :
    <Tooltip title={t('Login')} arrow>
      <IconButton onClick={handleClickOpenLogin} size="small" sx={{ ml: 2 }}>
        <PersonAddIcon style={{width:'36px', height:'36px'}}/>
      </IconButton>
    </Tooltip>
    }
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 247,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {user?.email}
        </MenuItem>
        <MenuItem>
          <Avatar /> Achievements
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
  
      <Dialog open={openLogin} onClose={handleCloseLogin} >
        <DialogTitle className='dialogbg'>{t('Login')}</DialogTitle>
        <DialogContent className='dialogbg'>
          
          
           

          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                helperText={t('email_helper')}
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
                id="password"
                autoComplete="current-password"
				        value={loginPassword}
                type={showPassword ? "text" : "password"}
                helperText={t('password_helper')}
				        onChange={(e) => setLoginPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
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
                <Grid >
                <IconButton onClick={signInWithGoogle} size="small" sx={{ ml: 1 }}>
                  <GoogleIcon style={{width:'36px', height:'36px'}}/>
                </IconButton>
                <IconButton onClick={signInWithGithub} size="small" sx={{ ml: 1 }}>
                  <GitHubIcon style={{width:'36px', height:'36px'}}/>
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
        <DialogTitle className='dialogbg'>{t('register')}</DialogTitle>
        <DialogContent className='dialogbg'>
        <DialogContentText>
          {t('register_desc')}<EmojiEventsIcon/>
          </DialogContentText>
          

          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                helperText={t('email_helper')}
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
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
				        value={registerPassword}
				        onChange={(e) => setRegisterPassword(e.target.value)}
                helperText={t('password_helper')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Repeat password"
                type={showPassword ? "text" : "password"}
                id="repeat password"
                autoComplete="current-password"
				        value={registerPassword}
				        onChange={(e) => setRegisterPassword(e.target.value)}
                helperText={t('password_helper_2')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <Grid container>
                <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                </Grid>
                <Grid >
                <IconButton onClick={signInWithGoogle} size="small" sx={{ ml: 1 }}>
                  <GoogleIcon style={{width:'36px', height:'36px'}}/>
                </IconButton>
                <IconButton onClick={signInWithGithub} size="small" sx={{ ml: 1 }}>
                  <GitHubIcon style={{width:'36px', height:'36px'}}/>
                </IconButton>
                </Grid>
              </Grid>       
                
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