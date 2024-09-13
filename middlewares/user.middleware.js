
const userModel = require("../db/user.model");
module.exports = async (req, res, next) => {
  try {
    const { name } = req.headers;
    if (!name)
      return res
        .status(400)
        .json({ error: true, message: "Email is required" });
    const userName = await userModel.findOne({ name });
    if (!userName) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    if (name === userName.name) {
      next();
    } else {
      return res
        .status(403)
        .json({ error: true, message: "Access forbidden: Age restriction" });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: "Server error" });
  }
};
