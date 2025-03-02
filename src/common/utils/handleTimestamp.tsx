const handleTimestamp = (timestamp: any) => {
  const validTimestamp = Number(timestamp);

  if (isNaN(validTimestamp)) {
      console.error('Invalid timestamp:', timestamp);
      return 'Invalid Date';
  }

  const formattedDate = new Date(validTimestamp).toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
  });

  return formattedDate;
};
export { handleTimestamp };
