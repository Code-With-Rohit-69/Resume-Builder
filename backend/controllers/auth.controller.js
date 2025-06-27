import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = generateToken(user._id);

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    console.log(`Error in Register controller ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    return res
      .status(200)
      .json({ success: true, message: "Login successfully", token });
  } catch (error) {
    console.log(`Error in Login controller ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ successs: false, message: "User not available" });
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export { registerUser, loginUser, getUserProfile };
