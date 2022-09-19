const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const app = express();
const User = require("./models/inscriptionModel");
const { updateOne } = require("./models/inscriptionModel");
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://djibrilsamassa:Ds02072001.@cluster0.gn9qaou.mongodb.net/Quizly",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connexion à la base de données => OK"));

secret = "eyJhbGciOiJYjw7a6s5I_7L98S4RYn3y_X7WpRujOdx1RW-e7kbLUk";

app.post("/inscription", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  try {
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
  } catch (err) {
    return res.status(400).json({
      message: "An error happened. Bad data received.",
    });
  }
  res.status(201).json({
    message: "User crée",
  });
});

app.post("/connexion", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "adresse email ou mot de passe invalide",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "adresse email ou mot de passe invalide",
      });
    }

    res.json(user);
    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    console.log(token);

    res.cookie("jwt", token, { httpOnly: true, secure: false });
  } catch (err) {
    return res.status(400).json({
      message: "An error happened. Bad data received.",
    });
  }
});


app.get("/test", (req, res) => {
  console.log(req.cookie);
  try {
    data = jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    return res.status(401).json({
      message: "Your token is not valid",
    });
  }

  // L'utilisateur est authentifié/autorisé
  res.json({
    message: "Votre requête a été acceptée",
    data,
  });
});

app.listen(8000, () => {
  console.log("connexion au serveur => OK");
});
