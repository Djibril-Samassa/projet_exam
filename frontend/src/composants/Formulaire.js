import React, { useState } from "react";
import { useContext } from "react";
import { haveAccountcontext } from "../App";
import Style from "./Formulaire.module.css";
import { Link } from "react-router-dom";
import { modalContext } from "../App";

export default function Formulaire() {
  const accountState = useContext(haveAccountcontext);
  const modal = useContext(modalContext);
  const haveAccount = accountState.haveAccount;
  const [reinitPw, setReinitPw] = useState(false);
  return (
    <div>
      <form className={Style.formulaire}>
        {!reinitPw ? (
          <>
            <h1 className={Style.formTitle}>
              {haveAccount ? "Connectez vous" : "Inscrivez-vous"}
            </h1>
            {!haveAccount ? (
              <>
                <span>
                  <label for="prenom">Prenom</label>
                  <input type="text" />
                </span>
                <span>
                  <label for="nom">Nom</label>
                  <input type="text" />
                </span>
                <span>
                  <label for="email">Adresse e-mail</label>
                  <input type="email" />
                </span>
                <span>
                  <label for="username">Nom d'utilisateur</label>
                  <input type="text" />
                </span>
                <span>
                  <label for="password">Mot de passe</label>
                  <input type="password" />
                </span>
                <span>
                  <label for="password">Confirmez votre mot de passe</label>
                  <input type="password" />
                </span>
                <p
                  onClick={() => {
                    accountState.setHaveAccount(true);
                  }}
                  className={Style.link}
                >
                  Vous avez déjà un compte ? connectez-vous
                </p>
              </>
            ) : (
              <>
                <span className={Style.soloInput}>
                  <label for="email">Adresse e-mail</label>
                  <input type="email" />
                </span>
                <span className={Style.soloInput}>
                  <label for="password">Mot de passe</label>
                  <input type="password" />
                </span>
                <p
                  onClick={() => {
                    accountState.setHaveAccount(false);
                  }}
                  className={Style.link}
                >
                  Vous n'avez pas de compte ? inscrivez-vous
                </p>
                <p
                  onClick={() => {
                    setReinitPw(true);
                  }}
                  className={Style.link}
                >
                  Mot de passe oublié
                </p>
              </>
            )}
            <Link
              to="/"
              onClick={() => {
                modal.setShowModal(false);
              }}
              className={`${Style.validation} button`}
            >
              {haveAccount ? "Se connecter" : "S'inscrire"}
            </Link>
          </>
        ) : (
          <>
            <h1 className={Style.formTitle}>Mot de passe oublié</h1>
            <span>
              <label for="username">Nom d'utilisateur</label>
              <input type="text" />
            </span>
            <span className={Style.soloInput}>
              <label for="email">Adresse e-mail</label>
              <input type="email" />
            </span>
            <Link
              to="/"
              onClick={() => {
                modal.setShowModal(false);
              }}
              className={`${Style.validation} button`}
            >
              Reinitialiser votre mot de passe
            </Link>
          </>
        )}
      </form>
    </div>
  );
}
