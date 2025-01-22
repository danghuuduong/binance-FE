// Hàm định dạng giá trị số với dấu phẩy (,) và dấu chấm (.)
const handleParseInt = (value: number | undefined) => {
  console.log("🚀 ~ handleParseInt ~ value:", value);
  return value !== undefined && value !== null ? parseFloat(value.toFixed(2)) : "-";
};
export { handleParseInt };
