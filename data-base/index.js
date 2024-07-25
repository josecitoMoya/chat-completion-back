import mongoose from "mongoose";

const mongoConnection =
  "mongodb+srv://miTurnoWebApp:challenge@challenge.0ziosfz.mongodb.net/?retryWrites=true&w=majority&appName=challenge";

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
