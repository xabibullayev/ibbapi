import User from "../models/User.js";
import bcrypt from "bcryptjs";

//REGISTER
export const register = async (req, res) => {
  try {
    //check username
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json("Bunday paydalaniwshi bazada bar!");
    }

    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    //save user and respond
    await newUser.save();
    res.status(200).json("Jana paydalaniwshi kiritildi!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Login yaki parol qate!");
    }

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json("Login yaki parol qate!");
    }

    //send response
    res.status(200).json({ _id: user._id, username: user.username });
  } catch (err) {
    res.status(500).json(err);
  }
};
