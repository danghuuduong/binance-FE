import React from "react";
import { DatePicker, version, Row, Col, Card } from "antd";
import Candlestick from "./Candlestick ";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Row style={{ minHeight: 300 }}>
        <Col span={8}>
          <div className="home-card home-candlestick border-Line border border-solid rounded-xl pd-15">
            <Candlestick />
          </div>
        </Col>
        <Col span={16}>
          <div className="home-card border-Line border border-solid rounded-xl pd-15">
            {/* <Candlestick /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
