interface CandlestickDataI {
  openTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  closeTime: string;
  type: string;
  statusTrading?: string
}

interface SocketMessageI {
  closeTime: string;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  type: string;
}

interface VolumI {
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  timestamp: string;
}

export type { CandlestickDataI, SocketMessageI, VolumI };
