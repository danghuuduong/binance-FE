const handleParseFloat2 = (value: number | string | undefined | null, type = 2) => {
  // Chuyển string thành number nếu là string, nếu không thì giữ nguyên giá trị
  const parsedValue = (typeof value === "string" ? parseFloat(value) : value);

  return parsedValue !== undefined && parsedValue !== null && !isNaN(parsedValue)
    ? parseFloat(parsedValue.toFixed(type))
    : "-";
};

export { handleParseFloat2 };
