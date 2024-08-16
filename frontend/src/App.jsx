import "./App.css";
import React from "react";
import { useContext, useEffect } from "react";
import UserContext from './context/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Sounds from "./pages/Sounds";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
