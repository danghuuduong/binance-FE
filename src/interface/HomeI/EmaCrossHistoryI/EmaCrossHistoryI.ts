interface DataEmaCrossHistoryArrayI {
  _id: string;
  cross: 'up' | 'down';
  isActiveExecuteTrade: boolean;
  time: string;
  moneyFoldingOne: string;
  foldingCurrent: number;
  __v: number | string;
}

interface DataEmaCrossHistoryI {
  currentPage: string;
  data: DataEmaCrossHistoryArrayI[];
  message: string;
  status: string;
  totalCount: number;
  totalPages: number;
}



export type { DataEmaCrossHistoryI, DataEmaCrossHistoryArrayI };