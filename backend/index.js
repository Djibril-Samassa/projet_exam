const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const app = express();
const User = require("./models/inscriptionModel");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://djibrilsamassa:Ds02072001.@cluster0.gn9qaou.mongodb.net/Quizly",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connexion à la base de données => OK"));

app.post("/auth", async (req, res) => {
  await User.create(req.body);
  res.status(201).json({
    message: "User crée",
  });
});

app.listen(8000, () => {
  console.log("connxion au serveur => OK");
});
