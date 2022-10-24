import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

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
          <Route  path="/" exact component={Home}/>
          <Route  path="Auth"  Component={Auth}/>
        </Routes>
        <Home />
      </Container>
    </BrowserRouter>
   
  );
}

export default App;

