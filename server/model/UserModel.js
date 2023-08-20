import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please Enter a Valid Email"],
    required: [true, "Please Provide an Email"],
    unique: true,
  },
  contactNumber: {
    type: String,
    required: [true, "Please Provide a Contact Number"],
    unique: [true, "Entered Mobile Number is already exist"]
  },
  password: {
    type: String,
    required: [true, "Please Provide an Password"],
    select: false,
    minLength: [8, "Password must contain atleast 8 character"],
  },
  role: {
    type: String,
    default: "user",
  },
});

// hashing password if modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// generating jwt token method
userSchema.method("genToken", function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SEC, {
    expiresIn: "2d",
  });
});

// compare password method
userSchema.method("comparePassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
