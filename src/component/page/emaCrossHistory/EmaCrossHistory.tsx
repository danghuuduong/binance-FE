import React, { useState } from "react";
import { handleConvertTime } from "../../../common/utils/handleConvertTime";
import { useEmaCrossHistoryApi } from "../../../hooks/useEmaCrossHistoryApi";
import Pagination from "../../../common/components/pagination/Pagination";

const EmaCrossHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data: dataEmaCrossHistory, isLoading: isLoadingEmaCrossHistory, error: errorEmaCrossHistory, refetch: fetchEmaCrossHistory } = useEmaCrossHistoryApi(currentPage);
  const emaCrossHistoryList = dataEmaCrossHistory?.data;
  // const totalCount = dataEmaCrossHistory?.totalCount;
  const totalPages = dataEmaCrossHistory?.totalPages;


  const handlegetPage = (page: number) => {
    setCurrentPage(page - 1);
    fetchEmaCrossHistory(page - 1);
  }
  return (
    <div className="h-[100%]">
      <h1 className="font-[700]">EMA Cross Orver History</h1>
      <div className="flex flex-col justify-between h-[100%]">
        <div>
          <div className="relative overflow-y-auto rounded-lg mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-white uppercase bg-grayBody ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ema Cắt nhau
                  </th>

                  <th scope="col" className="px-6 py-3">
                    thời gian
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Thếp hiện tại
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Tiền vào lệnh
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Trạng Thái vào lệnh
                  </th>

                </tr>
              </thead>
              <tbody>
                {emaCrossHistoryList?.map((value, index) => {
                  return (
                    <tr className={`${index !== emaCrossHistoryList.length - 1 ? 'border-b' : ''} border-[#3d3d3d] bg-gray-600 text-white`} key={value._id} >
                      <th className="px-6 py-4 ">
                        {value.cross === "up" ? "EMA 9 cross EMA 25 Từ dưới lên" : "EMA 9 cross EMA 25 Từ trên xuống"}
                      </th>

                      <td className="px-6 py-4">
                        {handleConvertTime(value.time)}
                      </td>
                      <td className="px-6 py-4">
                        {value.foldingCurrent ? <span>Thếp {value.foldingCurrent}</span> : "-"}
                      </td>

                      <td className="px-6 py-4">
                        {value.moneyFoldingOne ? <span> {value.moneyFoldingOne} $USDT</span> : "-"}
                      </td>

                      <td className="px-6 py-4">
                        {value.isActiveExecuteTrade ? "Is Trading" : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center  translate-y-[-15px]">
          <Pagination totalPages={totalPages} handlegetPage={handlegetPage} />
        </div>
      </div>

    </div>
  );
};

export default EmaCrossHistory;
