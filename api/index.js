const { Router } = require("express");
const userRouter = require("./users/users.route");
const movieRouter = require("./movies/movies.route");
const apiRouter = Router();
const userMiddleware = require("../middlewares/user.middleware");
const ageCheckMiddleware = require("../middlewares/movie.middleware");

apiRouter.use(
  "/users",
  // userMiddleware,
  userRouter
);

apiRouter.use(
  "/movies",
//   ageCheckMiddleware,
  movieRouter
);

module.exports = apiRouter;
