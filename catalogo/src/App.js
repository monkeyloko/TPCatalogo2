import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';
import Detalle from './components/Detalle';
import { ProductsProvider } from "./contextState.js";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/detalle/:id" element={<Detalle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
