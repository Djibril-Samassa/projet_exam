/*eslint-disable*/
import Profile from "./pages/Profil";
import PageNotFound from "./composants/PageNotFound";
import List from "./pages/List";
import "./App.css";
import PlayQuiz from "./pages/Quiz/PlayQuiz";
import InvitToAuth from "./composants/Authentification/InvitToAuth";
import Accueil from "./pages/Accueil";
import Inscription from "./composants/Authentification/Inscription";
import Connexion from "./composants/Authentification/Connexion";
import { createContext, useEffect, useRef, useState } from "react";
import Header from "./composants/Header";
import CreateQuiz from "./pages/Quiz/CreateQuiz";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
export const authContext = createContext();
export const menuContext = createContext();

function App() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [auth, setAuth] = useState();
  const authValue = {
    auth: auth,
    setAuth: setAuth,
  };
  const menuValue = {
    selectedMenu: selectedMenu,
    setSelectedMenu: setSelectedMenu,
  };

  const isloggedIn = true;

  return (
    <menuContext.Provider value={menuValue}>
      <BrowserRouter>
        <div className="app_container">
          <div className="app_content">
            {isloggedIn ? (
              <>
                <Header />
                <Routes>
                  <Route path="/inscription" element={<Inscription />} />
                  <Route path="/connexion" element={<Connexion />} />
                  <Route path="/notFound" element={<PageNotFound />} />
                  <Route path="/*" element={<Navigate to="/notFound" />} />
                  <Route path="/auth" element={<InvitToAuth />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/" element={<Accueil />} />
                  <Route path="/quiz/create" element={<CreateQuiz />} />
                  <Route path="/quiz/list" element={<List />} />
                  <Route
                    path="/quiz/play/:id"
                    element={
                      localStorage.selectedQuiz ? (
                        <PlayQuiz />
                      ) : (
                        <Navigate to="/" />
                      )
                    }
                  />
                </Routes>
              </>
            ) : (
              <Routes>
                <Route path="/auth" element={<InvitToAuth />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="*" element={<Navigate to="/auth" />} />
              </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
    </menuContext.Provider>
  );
}

export default App;
