const handleConvertTime = (time: string): string => {
  if (!time || isNaN(new Date(time).getTime())) {
    return '-';
  }
  const date = new Date(time);
  const day = String(date.getUTCDate()).padStart(2, '0'); // Ngày
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng (bắt đầu từ 0)
  const year = date.getUTCFullYear(); // Năm
  const hours = String(date.getUTCHours()).padStart(2, '0'); // Giờ
  const minutes = String(date.getUTCMinutes()).padStart(2, '0'); // Phút
  const seconds = String(date.getUTCSeconds()).padStart(2, '0'); // Giây

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}
export { handleConvertTime };
