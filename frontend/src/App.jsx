import "./App.css";
import React from "react";
import { useContext, useEffect } from "react";
import UserContext from './context/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Library, Sounds, SignUp, Login, NotFound } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/library" element={<Library />} />
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
