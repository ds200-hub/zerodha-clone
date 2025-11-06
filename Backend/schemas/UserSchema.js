const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "your username is required"],
    },
    password: {
        type: String,
        required: [true, "your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        // password ko hash karo
        this.password = await bcrypt.hash(this.password, 12);
        next();
    } catch (error) {
        next(error);
    }
})

module.exports = { UserSchema };