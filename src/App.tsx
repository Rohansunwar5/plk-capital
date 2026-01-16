import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';

import { PageTransition } from './components/PageTransition';

function App() {
  return (
    <div className="min-h-screen bg-plk-navy flex flex-col">
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;