import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bollywood from './bollywood.jsx';
import Footer from './footer';
import Header from './header';
import Hollywood from './hollywood';
import Main from './main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/bollywood.jsx" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          {/* Other routes go here */}
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
