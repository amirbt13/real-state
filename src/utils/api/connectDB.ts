import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  if (mongoose.connections[0].readyState) {
    return;
  }
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI as string, {});
  console.log("Connected to DB");
};

export default connectDB;
