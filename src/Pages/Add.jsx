import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../Data";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useToast } from "../Contexts/toastContext";

const Add = () => {
  const { showSuccess } = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleRegister = () => {
    students.push({
      name: name,
      rollNo: rollNo,
      emailID: email,
      course: course,
    });
    showSuccess(`${name} was added!`);
    navigate("/");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          borderRadius: 4,
          mt: 10,
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold" mb={3}>
          Add new student
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Roll No"
            name="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="course-label">Select Course</InputLabel>
            <Select
              labelId="course-label"
              value={course}
              label="Select Course"
              onChange={(e) => setCourse(e.target.value)}
            >
              <MenuItem value="Physics">Physics</MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
              <MenuItem value="Maths">Maths</MenuItem>
              <MenuItem value="History">History</MenuItem>
            </Select>
          </FormControl>

          <Button
            onClick={handleRegister}
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              fontWeight: "bold",
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Add Student
          </Button>
        </Box>

        <Box textAlign="center" mt={2}>
          <Button
            onClick={() => navigate("/")}
            sx={{ color: "gray", fontSize: "0.875rem" }}
          >
            ← Back to dashboard
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Add;
