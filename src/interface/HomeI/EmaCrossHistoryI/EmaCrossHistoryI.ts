interface DataEmaCrossHistoryI {
  _id: string;
  cross: 'up' | 'down';
  isActiveExecuteTrade: boolean;
  time: string;
  moneyFoldingOne: string;
  foldingCurrent: number;
  __v: number | string;
}
export type { DataEmaCrossHistoryI };