import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  const user = null;

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route  path="/"  element={<Home />}/>
          <Route   path="/Auth"  element={<Auth />}/>
        </Routes>
        <GoogleOAuthProvider clientId="283138669990-5k99m2k4bv8j2hngk3j05ratviautpii.apps.googleusercontent.com">...</GoogleOAuthProvider>;
      </Container>
    </BrowserRouter>
   
  );
}

export default App;

