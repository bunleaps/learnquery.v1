const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@example.com",
      age: 25,
      position: "Data Scientist",
    },
    {
      id: 3,
      name: "Peter Smith",
      email: "petersmith@example.com",
      age: 40,
      position: "Manager",
    },
    {
      id: 4,
      name: "Johny Doe",
      email: "johnydoe@example.com",
      age: 30,
      position: "Software Engineer",
    },
    {
      id: 5,
      name: "Jany Doe",
      email: "janydoe@example.com",
      age: 25,
      position: "Marketing Manager",
    },
    {
      id: 6,
      name: "Peter Parker",
      email: "peterparker@example.com",
      age: 40,
      position: "Manager",
    },
    {
      id: 7,
      name: "Susan Jones",
      email: "susanjones@example.com",
      age: 35,
      position: "Sales Representative",
    },
    {
      id: 8,
      name: "David Brown",
      email: "davidbrown@example.com",
      age: 28,
      position: "Software Developer",
    },
    {
      id: 9,
      name: "Michael Green",
      email: "michaelgreen@example.com",
      age: 32,
      position: "Systems Engineer",
    },
    {
      id: 10,
      name: "Emily White",
      email: "emilywhite@example.com",
      age: 26,
      position: "Data Scientist",
    },
  ];

  res.status(200).json(data);
});

app.listen(5000, () => console.log("API started on port 3000"));
