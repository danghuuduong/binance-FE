// Hàm định dạng giá trị số với dấu phẩy (,) và dấu chấm (.)
const handleFodingToMoney = (mony: string | number, foldingCurrent: number): number => {
  
  const foldingOne = (Number(mony) * 11) / 100;
  switch (foldingCurrent) {
    case 1:
      return foldingOne;
    case 2:
      return foldingOne * 2.5;
    case 3:
      return foldingOne * 5.5;
    default:
      return 0;
  }
};
export { handleFodingToMoney };
