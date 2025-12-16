import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import OfferDetails from "./pages/OfferDetails";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offer/:id" element={<OfferDetails />} />
        </Routes>
        <footer className="footer text-center" style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
          <p>© 2025 Project J. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
