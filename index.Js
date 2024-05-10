const express = require('express');
const app = express();

const courses = [
  { id: 1, title: 'JavaScript Basics', instructor: 'Robo Ben', price: "#1,350" },
  { id: 2, title: 'React Fundamentals', instructor: 'Big Ben', price: "#2,500" },
  { id: 3, title: 'Node.js Mastery', instructor: 'Benjamin Tennyson', price: "#3,000"}
  // Add more courses as needed
];

// Endpoint to handle GET requests for courses
app.get('/courses', (req, res) => {
  try{
    res.status(200).json(courses);
  } catch(error){
    console.log(error);
  }
});

// Endpoint to handle POST requests for courses
app.post('/courses', (req, res) => {
  const newCourse = req.body;
  newCourse.id = courses.length + 1;
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});