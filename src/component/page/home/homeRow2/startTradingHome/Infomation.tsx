import React, { useEffect, useState } from "react";
import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import { dataUSDI } from "../../../../../interface/HomeI/StartTradingHomeI/StartTradingHomeType";
import api from "../../../../../api/axios";
import LoadDingPage from "../../../../../common/components/loadingPage/LoadingPage";

interface InfomationProps {

}

const Infomation: React.FC<InfomationProps> = () => {
    const [usdData, setUsdData] = useState<dataUSDI | null>(null); // USDT hiện tại
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await api.get("/my-infomation");
                if (response?.status === 200) {
                    setUsdData(response?.data);
                }
            } catch (err) {
                console.error("🚀 ~ useEffect ~ error:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {isLoading && <LoadDingPage />}
            <div className="text-grayTextCT mt-3">
                Số dư khả dụng :
                <span className="text-whiteCT ml-2">
                    {handleParseFloat2(usdData?.USDT?.total)} USD
                </span>
            </div>
        </>


    );
}

export default Infomation;