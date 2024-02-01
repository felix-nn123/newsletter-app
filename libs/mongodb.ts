import mongoose from "mongoose";

const printEnv = (value: string | undefined) => {
  return value
};

const connectionDB = async () => {
  try {
    await mongoose.connect(printEnv(process?.env?.MONGO_URI));
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error?.message);
  }
};

export default connectionDB;
