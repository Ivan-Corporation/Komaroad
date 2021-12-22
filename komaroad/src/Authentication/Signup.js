import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { UserState } from "../UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import InputAdornment from '@mui/material/InputAdornment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6495ED"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1560BD"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4169E1"
    },

    "& .MuiInputLabel-outlined": {
      color: "#6495ED"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#1560BD"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#4169E1"
    }
  }
});



const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const classes = useStyles();

  const { t } = useTranslation();


  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Не совпадают парки!", {
        pauseOnHover: true
    });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Регистрация успешна!", {
        pauseOnHover: true
    });

      handleClose();
    } catch (error) {
      toast.warning("Что-то не так!", {
        pauseOnHover: true
    });
      return;
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  



  return ( 
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    limit={3}
    />
      <TextField
        variant="outlined"
        
        margin="normal"
        className={classes.root}
        fullWidth
        id="email"
        helperText={t('email_helper')}
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />
      <TextField
        variant="outlined"
        color='none'
        margin="normal"
        className={classes.root}
        fullWidth
        name="password"
        label="Password"
        id="password"
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
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
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
      variant="outlined"
      color='none'
      margin="normal"
      className={classes.root}
      name="password"
      label="Password"
      id="password"
      autoComplete="current-password"
      type={showPassword ? "text" : "password"}
      helperText={t('password_helper')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        
      }}
        variant="outlined"
        label="Подтвердите пароль"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#6495ED" }}
        onClick={handleSubmit}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default Signup;
