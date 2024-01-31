import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process?.env?.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error?.message);
  }
};

export default connectionDB;
