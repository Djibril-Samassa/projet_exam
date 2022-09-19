import React, { useContext, useState } from "react";
import Style from "./Formulaire.module.css";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../App";
import axios from "axios";

export default function Connexion() {
  const redirect = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const data = {
    email: email,
    password: password,
  };
  const handleLogin = (data) => {
    axios
      .post("http://localhost:8000/connexion", data)
      .then((res) => {
        redirect("/");
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  return (
    <div>
      <form className={Style.formulaire}>
        <h1 className={Style.formTitle}>Connectez-vous</h1>
        <span className={Style.inputContainer}>
          <label for="email">Adresse e-mail</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
          />
        </span>
        <span className={Style.inputContainer}>
          <label for="password">Mot de passe</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
          />
        </span>
        <p className="textCenter">
          Vous n'avez pas de compte ?{" "}
          <Link to="/inscription" style={{ color: "#222" }}>
            inscrivez-vous
          </Link>
        </p>
        <p className="error">
          {error ? "Adresse e-mail ou mot de passe invalide" : null}
        </p>
        <div
          onClick={() => {
            handleLogin(data);
          }}
          className={`${Style.validation} button`}
        >
          Se connecter
        </div>
      </form>
    </div>
  );
}
