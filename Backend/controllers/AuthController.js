const { UserModel } = require("../models/UserModel");
const { CreateSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        const user = new UserModel({ email, password, username, createdAt });
        await user.save();

        const token = CreateSecretToken(user._id);
        const isProduction = process.env.NODE_ENV === "production";

        res.cookie("token", token, {
            httpOnly: true,       // JS cannot read it (safer)
            secure: true,         // required for HTTPS
            sameSite: "None",     // allows cross-site cookies
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(201).json({ message: "User signed up successfully", success: true, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const token = CreateSecretToken(user._id);
        console.log(token)

        const isProduction = process.env.NODE_ENV === "production";

        res.cookie("token", token, {
            httpOnly: true,       // JS cannot read it (safer)
            secure: true,         // required for HTTPS
            sameSite: "None",     // allows cross-site cookies
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({ message: "User logged in successfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

//logout

const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Logged out successfully" });
};



module.exports = { SignUp, Login, Logout};
