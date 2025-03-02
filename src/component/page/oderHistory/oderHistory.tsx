import React, { useState, useEffect } from "react";
import { useOrderHistoryApi } from "../../../hooks/useOrderHistoryApi ";
import { handleTimestamp } from "../../../common/utils/handleTimestamp";


const OderHistory: React.FC = () => {
    const { data: dataOrderHistory, isLoading: isLoadingEmaCrossHistory, error: errorEmaCrossHistory, } = useOrderHistoryApi();
    const data = dataOrderHistory?.filter((value: any) => {
        return value?.type === "market"
    })
   
    return (
        <div className="h-[100%]">
            OderHistory
            <div className="relative overflow-y-auto rounded-lg mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-white uppercase bg-grayBody ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Thời Gian
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Bên
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Giá Vào
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Số lượng
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((value: any) => {
                                return <tr key={value?.id}>
                                    <th className="px-6 py-4 ">
                                        {value?.id}
                                    </th>

                                    <td className="px-6 py-4">
                                        {handleTimestamp(value?.info?.time)}
                                    </td>

                                    <td className={`px-6 py-4 ${value?.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                                        {value?.side === "buy" ? "Long" : "Sort"}
                                    </td>
                                    <td className="px-6 py-4">
                                        {value?.price}
                                    </td>

                                    <td className="px-6 py-4">
                                        {value?.cost} $
                                    </td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OderHistory;
