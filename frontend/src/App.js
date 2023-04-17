
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route , } from "react-router-dom";
import ResultsList from "./results.js";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route>
      <Route index element={<index/>} /> {/* Main Page */}
        <Route path="/Results" element={<ResultsList />} />
        
      </Route>
    </Routes>
    
        

    
  </BrowserRouter>
  

    
  );
  
}

export default App;
