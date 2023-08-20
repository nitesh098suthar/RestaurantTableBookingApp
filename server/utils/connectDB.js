import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RestroSpace",
    });
    console.log("Connected to Database!");
  } catch (error) {
    console.log(error.message);
  }
};
