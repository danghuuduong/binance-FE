// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const [locale, setLocale] = React.useState("vi_VN");

  useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
         {
          "autosize": true,
          "height": "700",
          "symbol": "BINANCE:BTCUSD",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "${locale}",
          "withdateranges": true,
          "allow_symbol_change": true,
          "calendar": false,
           "studies": [
            "STD;EMA",
            "STD;EMA"
            
          ],
          "hide_side_toolbar": false,           
          "support_host": "https://www.tradingview.com"
          
        }`;

      if (container?.current) {
        container.current.appendChild(script);
      }

      return () => {
        if (container?.current) {
          container?.current.removeChild(script);
        }
      };
    }, []);

  return (
    <>
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
    </>
  );
}

export default memo(TradingViewWidget);
