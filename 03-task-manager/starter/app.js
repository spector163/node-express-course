const express = require("express");
app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();
const port = 3000;

app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("welcome to the task master");
});
// app.use(express.urlencoded())

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.dbstring);
    app.listen(port, () => {
      console.log(`server is listeing at ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
