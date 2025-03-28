interface CandlestickDataI {
  openTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  closeTime: string;
  type: string;
  statusTrading?: string;
  emaCrossOverStatus?: {
    status: string;
    time: string;
  }
  timeBinance?: string;
  messenger?: string;
  isWaitingForCompletionStatus?: boolean
  positions?: any
  openOrders?: any
}

interface SocketMessageI {
  closeTime: string;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  type: string;
}

export type { CandlestickDataI, SocketMessageI };
