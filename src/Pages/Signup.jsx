import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "../Contexts/toastContext";
import { auth } from "../firebase/initialization";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
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

  // const [isError, setIsError] = useState("");
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      updateProfile(userCredential.user, {
        displayName: formData.username,
      });
      console.log(userCredential.user)
      showSuccess("You have been registered successfully!");
      navigate(-1);
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
      showError(error.message);
    }
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "7rem" }}>
        <form onSubmit={handlesubmit}>
          <Typography variant="h5" align="center" sx={{ color: "gray" }}>
            Welcome to Students Dashboard
          </Typography>
          <Typography align="center">Please fill in your details.</Typography>
          <TextField
            type="text"
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            onChange={handlechange}
            value={formData.username}
            margin="normal"
            fullWidth
            required
          />
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
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Login here
          </Link>
        </Typography>
      </Container>
    </>
  );
}
