import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to mongodb client✌️");
  } catch (error) {
    console.log("error messege", error);
    process.exit(1);
  }
};

export default connectDB;
