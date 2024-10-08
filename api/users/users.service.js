const userModel = require("../../db/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: true, message: "Not Found" });
    const searchResult = await userModel.findById(id);
    res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
  }
};


const createUser = async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const existUser = await userModel.findOne({ email });
      if (existUser)
        return res
          .status(400)
          .json({ error: true, message: "User already exists" });
      const newUser = await userModel.create({ name, email, age });
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser =  async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(404).json({ error: true, message: "Not Found" });
      const deletedUser = await userModel.findByIdAndDelete(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.log(error);
    }
  }

  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;
      const searchResult = await userModel.findById(id);
      if (!searchResult)
        return res.status(404).json({ error: true, message: "Not Found" });
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = { getAllUsers, getUserById, createUser, deleteUser, updateUser };
