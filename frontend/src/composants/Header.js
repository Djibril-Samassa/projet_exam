import React from "react";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <nav  className={Style.header}>
      <li>Accueil</li>
      <li>Créer mon quiz</li>
      <li>Jouer</li>
      <img src="logo.png" className="logo"/>
      <li>Nouveautés</li>
      <li>Mon Compte</li>
      <li>Classement</li>
    </nav>
  );
}
