import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "../Contexts/toastContext";
import { auth } from "../firebase/initialization";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      showSuccess("Logged in successfully!");
      navigate(-1);
    } catch (error) {
      console.log(error);
      showError(error.message);
    }
    setFormData({ email: "", password: "" });
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "7rem" }}>
        <form onSubmit={handlesubmit}>
          <Typography variant="h5" align="center" sx={{ color: "gray" }}>
            Welcome Back!
          </Typography>
          <Typography align="center">Let's get you logged in!</Typography>

          <TextField
            type="password"
            id="password"
            label="Password"
            name="password"
            variant="outlined"
            onChange={handlechange}
            value={formData.password}
            margin="normal"
            fullWidth
            required
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handlechange}
            value={formData.email}
            margin="normal"
            fullWidth
            required
          />
          <Box mt={3}>
            <Button variant="contained" size="large" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Sign up here
          </Link>
        </Typography>
      </Container>
    </>
  );
}
