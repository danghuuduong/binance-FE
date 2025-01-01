import React from "react";
import Candlestick from "./Candlestick";
import UserTrading from "./UserTrading";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <div className="home-card home-candlestick border-Line border p-4 rounded-xl">
            <Candlestick />
          </div>
        </div>
        <div className="col-span-8">
          <div className="home-card border-Line border p-4 rounded-xl">
            <UserTrading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
