import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CandlestickHistory from './component/CandlestickHistory';
import Candlestick from './component/Candlestick ';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Candlestick />} />
        <Route path="/candles" element={<CandlestickHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
