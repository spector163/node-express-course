const express = require("express");
const app = express();

let { people } = require("./data");
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  console.log(req.url);
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  console.log(name);

  if (!name) {
    return res.status(400).json({ success: false, msg: "name is required" });
  }

  res.status(201).json({ success: true, person: name });
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(401).send("please provide end cred");
});
app.listen(5000, () => {
  console.log("server is listning on part 5000");
});
