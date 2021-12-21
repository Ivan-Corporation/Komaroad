import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { UserState } from "../UserContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Заполните поля", {
        pauseOnHover: true
    }); 
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.error("Успех", {
        pauseOnHover: true
    }); 

      handleClose();
    } catch (error) {
      toast.error("Ошибка", {
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
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#EEBC1D" }}
      >
        Войти
      </Button>
    </Box>
  );
};

export default Login;
