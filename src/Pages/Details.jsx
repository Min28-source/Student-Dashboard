import React from "react";
import { useParams } from "react-router-dom";
import students from "../Data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Details() {
  const { rollNo } = useParams();
  const student = students.find((s) => s.rollNo === rollNo);

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 3,
        minHeight: "100vh",
        mt: 10,
      }}
    >
      <Card
        sx={{
          width: { xs: "97%", sm: "85%" },
          boxShadow: 3,
          borderRadius: 5,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            {student.name}
          </Typography>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            {student.course}
          </Typography>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            {student.rollNo}
          </Typography>
          <Typography sx={{ color: "primary.main" }}>
            {student.emailID}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Details;
