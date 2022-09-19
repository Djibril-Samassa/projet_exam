import Style from "./InvitToAuth.module.css";
import { Link } from "react-router-dom";
import React from "react";

export default function InvitToAuth() {
  return (
      <div className={Style.container}>
        <h2>Veuillez vous authentifier pour accèder à la plateforme</h2>
        <div>
          <Link className="button yellow link onHover" to="/inscription">
            S'inscrire
          </Link>
          <Link className="button yellow link onHover" to="/connexion">
            Se connecter
          </Link>
        </div>
      </div>
  );
}
