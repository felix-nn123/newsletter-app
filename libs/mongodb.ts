import mongoose from "mongoose";

const MONGO_URI: string = (process.env.MONGO_URI as string);

const connectionDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database");
  } catch (error:unknown) {
    // console.log("Error connecting to database", error?.message);
  }
};

export default connectionDB;
