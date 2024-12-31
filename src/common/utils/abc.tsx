// Hàm định dạng giá trị số với dấu phẩy (,) và dấu chấm (.)
const formatNumber = (value: string): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(value));
};
export { formatNumber };
