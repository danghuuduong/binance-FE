interface dataUSDI {
  USDT: {
    total: number;
  };
}


interface getStartTrading {
  _id?: string;
  isTrading: boolean;
  foldingCurrent: number;
  largestMoney?: number;
  totalAmount: number;
  moneyfodingOne: number;
  isActiveExecuteTrade: boolean;
  isWaitingForCompletion: boolean;
  tradeRate: number;
  idOrderMain: string;
  idStopLossOrder: string;
  idTakeProfitOrder: string;
}
export type { dataUSDI, getStartTrading };
