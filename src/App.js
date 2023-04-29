import { Amplify } from "aws-amplify";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import config from "./aws-exports";
import Add from "./Components/Add";
import Search from "./Components/Search";
import Home from "./Components/Home";
Amplify.configure(config);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
