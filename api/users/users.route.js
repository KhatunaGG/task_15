const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("./users.service");

const userRouter = Router();

userRouter.get("", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
