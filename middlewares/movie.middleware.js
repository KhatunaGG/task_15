
const userModel = require("../db/user.model");

const ageCheckMiddleware = async (req, res, next) => {
  try {
    // console.log(req.headers['email'])
    const { email } = req.headers;
    if (!email) {
      return res
        .status(400)
        .json({ error: true, message: "Email is required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    if (user.age > 16) {
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

module.exports = ageCheckMiddleware;
