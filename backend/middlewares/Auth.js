const jwt = require("jsonwebtoken");

let data;
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
