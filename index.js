import app from "./app.js";
import connectionDB from "./data-base/index.js";

import "dotenv/config";

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, async () => {
  try {
    connectionDB();
    console.log("Server is listening at port", SERVER_PORT);
  } catch (error) {
    console.log(error);
  }
});
