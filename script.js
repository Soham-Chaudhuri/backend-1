const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/profile", (req, res) => {
  res.send("Hello world from profile");
});

app.listen(3000);
