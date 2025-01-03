import React from "react";
import InfoUserTrading from "../homeRow1/InfoUserTrading";

const HomeTopUSD: React.FC = () => {
  const userList = [
    {
      id: 1,
      name: "Đặng Hữu Dương",
      money: "4000",
      profit: "320",
      date: "2/2/2024",
      vip: "5",
    },
    {
      id: 2,
      name: "Khoa Pug",
      money: "2000",
      profit: "320",
      date: "2/2/2024",
      vip: "3",
    },
    {
      id: 3,
      name: "Nguyễn Hữu Thanh",
      money: "1000",
      profit: "320",
      date: "2/2/2024",
      vip: "3",
    },
    {
      id: 4,
      name: "Đặng Thu Xuân",
      money: "5000",
      profit: "320",
      date: "2/2/2024",
      vip: "2",
    },
    {
      id: 5,
      name: "Văn Thắng",
      money: "4000",
      profit: "320",
      date: "2/2/2024",
      vip: "1",
    },
    {
      id: 6,
      name: "Hoàng Việt",
      money: "4000",
      profit: "320",
      date: "2/2/2024",
      vip: "1",
    },
    {
      id: 7,
      name: "Hoàng Việt",
      money: "4000",
      profit: "320",
      date: "2/2/2024",
      vip: "1",
    },
  ];
  const headerList = ["name", "USD", "Profit(%)", "Vip"];
  return (
    <div>
      {/* https://www.flaticon.com/free-icons/top */}
      <div className="text-2xl font-medium flex items-center">
        <span>BXH BTC </span>
        <span className="w-7 ml-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5129/5129624.png"
            alt=""
          />
        </span>
      </div>
      <div className="mt-4">
        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs uppercase bg-grayBody  text-whiteCT">
              <tr>
                {headerList.map((value) => (
                  <th key={value} scope="col" className="px-6 py-3">
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr
                  key={user.id}
                  className="bg-grayBody border-b border-gray-700 text-whiteCT"
                >
                  <td className="px-5 py-2 font-medium whitespace-nowrap ">
                    {user.name}
                  </td>
                  <td className="px-5 py-2">{user.money} $</td>
                  <td className="px-5 py-2">{user.profit} %</td>
                  {/* <td className="px-5 py-2">{user.date}</td> */}
                  <td className="px-5 py-2">{user.vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-4 bg-grayCT rounded-lg p-4  border-grayTextCT border-[1px] mt-4">
        <InfoUserTrading />
      </div>
    </div>
  );
};

export default HomeTopUSD;
