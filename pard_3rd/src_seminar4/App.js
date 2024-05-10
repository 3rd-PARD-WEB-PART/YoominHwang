import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import MyInfo from './Pages/MyInfo';
import UpdateInfo from './Pages/UpdateInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyInfo />} />
      <Route path="/update" element={<UpdateInfo />} />
    </Routes>
  );
}

export default App;
