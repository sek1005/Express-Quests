const express = require("express");
const {putMovieById, putUserById} = require("../src/controllers/controllerputdelete");
const app = express();
app.use(express.json()); 

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUsersById);
app.post("/api/movies", movieControllers.postMovies);
app.post("/api/users", movieControllers.postUsers);
app.put("/api/movies/:id", putMovieById);
app.put("/api/users/:id", putUserById);
module.exports = app;
