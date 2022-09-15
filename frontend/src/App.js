/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import Accueil from "./pages/Accueil";
import Formulaire from "./composants/Formulaire";
import { createContext, useState } from "react";
import { Route, Routes, BrowserRouter, Form } from "react-router-dom";
export const haveAccountcontext = createContext();
export const modalContext = createContext();

function App() {
  const [haveAccount, setHaveAccount] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const modalValue = {
    showModal: showModal,
    setShowModal: setShowModal,
  };
  const value = {
    haveAccount: haveAccount,
    setHaveAccount: setHaveAccount,
  };
  return (
    <haveAccountcontext.Provider value={value}>
      <modalContext.Provider value={modalValue}>
        <div className="app_container">
          <div className="app_content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/auth" element={<Formulaire />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </modalContext.Provider>
    </haveAccountcontext.Provider>
  );
}

export default App;
