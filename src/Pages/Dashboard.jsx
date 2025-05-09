import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import students from "../Data";
import { Autocomplete, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("");

  const filtered = students.filter((student) => {
    const matchesName = student.name.toLowerCase().includes(search.toLowerCase());
    const matchesCourse = course ? student.course.toLowerCase() === course.toLowerCase() : true;
    return matchesName && matchesCourse;
  });

  const [studentData, setStudentData] = useState(null);
  const mock = new AxiosMockAdapter(axios);
  mock.onGet("/").reply(200, { students });

  useEffect(() => {
    axios.get("/").then(function (response) {
      setStudentData(response.data.students);
    });
  }, []);
  console.log(course);

  return (
    <>
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", display: "flex" }}>
            <SearchBar search={search} onChange={setSearch} />
            <Autocomplete
              options={["Physics", "Chemistry", "Maths", "History"]}
              value={course}
              onChange={(event, newValue) => {
                setCourse(newValue);
              }}
              id="controllable-states-demo"
              sx={{
                width: { xs: "35%", sm: "25%" },
                mt: 2,
                mx: 1,
                borderRadius: 4,
              }}
              renderInput={(params) => <TextField {...params} label="Filter" />}
            />
          </Box>
          {search && (
            <Box mt={2} mb={1} pl={3}>
              <Typography variant="h6" color="text.secondary">
                Showing search results for{"  "}
                <Typography component="span" fontWeight="bold" color="primary">
                  "{search}"
                </Typography>
              </Typography>
            </Box>
          )}
          {search ? (
            filtered.map((student, index) => (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  mt: 2,
                  width: "97%",
                  borderRadius: 5,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: 2,
                  marginLeft: "auto",
                  marginRight: "auto",
                  "&:hover": {
                    transform: "scale(1.01)",
                    // boxShadow: 6,
                  },
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
            ))
          ) : (
            <CardContent sx={{ width: "100%"}}>
               <Box mt={2} mb={1} pl={3}>
              <Typography variant="h5" color="text.secondary">
                All students
              </Typography>
            </Box>
              {studentData ? (
                studentData.map((student, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      mt: 2,
                      width: { xs: "90%", sm: "95%", md: "97%", lg: "97%" },
                      borderRadius: 5,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: 2,
                      "&:hover": {
                        transform: "scale(1.01)",
                        // boxShadow: 6,
                      },
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
                ))
              ) : (
                <p>Loading...</p>
              )}
            </CardContent>
          )}
        </Card>
      </Box>
    </>
  );
}
