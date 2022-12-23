import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Products from "./Products";

function MarketInt() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={Products} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MarketInt;
