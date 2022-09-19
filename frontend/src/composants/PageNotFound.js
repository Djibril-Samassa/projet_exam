import React from "react";
import { Link } from "react-router-dom";
import Style from "./Authentification/InvitToAuth.module.css";

export default function PageNotFound() {
  return (
    <div>
        <div className={Style.container}>
          <h1>Erreur 404</h1>
          <h2>La page que vous cherchez n'existe pas :(</h2>
          <div>
            <Link className="button yellow link onHover" to="/">
              Revenir à la page d'accueil
            </Link>
          </div>
        </div>
      </div>
  );
}
