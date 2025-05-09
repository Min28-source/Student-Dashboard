import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/initialization";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useToast } from "../Contexts/toastContext";

export default function Navbar() {
  const { showSuccess } = useToast();
  const { showError } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  const addStudent = () => navigate("/add");
  const toggleDrawer = (state) => () => setOpen(state);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false)
      }
    });
  }, []);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        showSuccess("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        showError(error);
      });
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#1976d2",
                  fontWeight: "bold",
                }}
              >
                Students Dashboard
              </Link>
            </Typography>

            <Button
              onClick={addStudent}
              sx={{ color: "primary", fontWeight: "bold" }}
            >
              <AddIcon />
              Add students
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <Typography variant="h6" gutterBottom sx={{ color: "primary.main" }}>
            Register
          </Typography>
          <List>
            {isLoggedin ? (
              <ListItem
                sx={{ cursor: "pointer", color: "primary.main" }}
                button
                onClick={handleLogout}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            ) : (
              <>
                <ListItem
                  sx={{ cursor: "pointer", color: "primary.main" }}
                  button
                  onClick={() => navigate("/login")}
                >
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem
                  sx={{ cursor: "pointer", color: "primary.main" }}
                  button
                  onClick={() => navigate("/signup")}
                >
                  <ListItemText primary="Signup" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
