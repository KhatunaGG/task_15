const { Router } = require("express");
const movieModel = require("../db/movies.model");

const movieRouter = Router();

movieRouter.get("/", async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
});

movieRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: true, message: "Not Found" });
    const searchResult = await movieModel.findById(id);
    res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
  }
});

movieRouter.post("/", async (req, res) => {
  try {
    const { title, year, isBookmarked } = req.body;
    const existMovie = await movieModel.findOne({ title });
    if (existMovie)
      return res
        .status(400)
        .json({ error: true, message: "Movie already exists" });
    const newMovie = await movieModel.create({ title, year, isBookmarked });
    res.status(200).json(newMovie);
  } catch (error) {
    console.log(error);
  }
});

movieRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: true, message: "Not Found" });
    const deletedMovie = await movieModel.findByIdAndDelete(id);
    res.status(200).json(deletedMovie);
  } catch (error) {
    console.log(error);
  }
});

movieRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, year, isBookmarked } = req.body;
    const searchResult = await movieModel.findById(id);
    if (!searchResult)
      return res.status(404).json({ error: true, message: "Not Found" });
    const updatedMovie = await movieModel.findByIdAndUpdate(
      id,
      { title, year, isBookmarked },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.log(error);
  }
});

module.exports = movieRouter;
