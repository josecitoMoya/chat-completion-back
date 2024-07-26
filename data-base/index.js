import mongoose from "mongoose";

import { DB_URL } from "../config/enviroment/index.js";

const mongoConnection = DB_URL;

const connectionDB = async () => {
  try {
    await mongoose.connect(mongoConnection);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is NOT connected");
    console.log(error);
  }
};

export default connectionDB;
