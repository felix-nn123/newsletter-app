import mongoose from "mongoose";

interface processParams{
  env:{
    MONGO_URI:string
  }
}

const printEnv:string = (process: processParams ) => {
  return process.env.MONGO_URI
};

const connectionDB = async () => {
  try {
    await mongoose.connect(printEnv(process));
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error?.message);
  }
};

export default connectionDB;
