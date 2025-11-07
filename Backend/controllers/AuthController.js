const {UserModel} = require("../models/UserModel");
const {CreateSecretToken} = require("../Util/SecretToken");
const bcrypt = require("bcrypt");

const SignUp = async(req, res, next) =>{
    try{
        const {email, password, username, createdAt} = req.body;
         if(!email || !password || !username) {
            return res.json({message:"All fields are required"});
        }
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.json({message: "User already exists"});
        }
        
        const user = new UserModel({ // .save() krne jaisa kaam ye create() method same hi kaam karta hai. destructing form mein variables ki value hai.
            email,
            password,
            username,
            createdAt,
        });

        await user.save();

        const token = CreateSecretToken(user._id); // jab koi document nya banta hai toh mongodb use latest document ko return krta hai . wha se use_.id aaya hai.
        res.cookie("token", token, {withCredentials:true,httpOnly:false,});

        res
        .status(201)
        .json({message: "user signed in successfully", success: true, user})

        next();
    } catch(error) {
        console.log(error);
    }
};

const Login = async(req,res,next)=>{
    console.log("reached to login");
    console.log(req.body);
    try{
        const {email,password} = req.body;
        if(!email || !password) {
            return res.json({message:"All fields are required"});
        }
        console.log("reached to user");
        const user = await UserModel.findOne({email});
        console.log(user);
        if(!user){
            return res.json({message:"Incorrect password or email"});
        }
        const auth = await bcrypt.compare(password,user.password);
        if(!auth){
            return res.json({message:"Incorrect password or email"});
        }
        console.log("reached to token");
        const token = CreateSecretToken(user._id);
        res.cookie("token", token, {withCredentials:true, httpOnly:false,});
        res.status(201).json({message: "user logged in successfully",success: true});
        console.log("reached after token");
        next()
        console.log("next");
    }catch(error) {
        console.log(error);
    }
}

module.exports = {SignUp,Login};

