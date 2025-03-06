import { NavLink } from "react-router-dom"; // Ensure you are using the correct package
import "./header.css";
const Header = (): JSX.Element => {
  const headerList = [
    { name: "home", link: "/", text: "Home" },
    { name: "history", link: "/candlestickHistory", text: "Lịch sử giao dịch" },
    { name: "MoneyHistory", link: "/moneyHistory", text: "Biến động số dư" },
    { name: "profile", link: "/profile", text: "Avatart" },
  ];
  return (
    <nav>
      <div className="header-wrap">
        {headerList.map((element, index) => {
          return (
            <div key={element.name} className={`${index !== 0 && "ml-15"} header-item`}>
              <NavLink to={element.link} end>
                {element.text}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
