import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { UserState } from "../UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

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
    />
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
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
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default Signup;
