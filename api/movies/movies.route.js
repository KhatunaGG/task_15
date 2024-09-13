const { Router } = require("express");
const { getAllMovies, getMoviesById, createMovies, deleteMovies, updateMovies } = require("./movies.service");

const movieRouter = Router();

movieRouter.get("", getAllMovies);
movieRouter.get("/:id", getMoviesById);
movieRouter.post("", createMovies);
movieRouter.delete("/:id", deleteMovies);
movieRouter.put("/:id", updateMovies);

module.exports = movieRouter;
