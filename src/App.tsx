import React from "react";
import { Link } from "react-router";
import Candlestick from "./component/Candlestick ";

const App: React.FC = () => {
  return (
    <div>
      <div>Home</div>
      <div>
        <Candlestick />
      </div>
      <div>
        <Link to={`candlestickHistory`}>candlestickHistory</Link>
      </div>
    </div>
  );
};

export default App;
