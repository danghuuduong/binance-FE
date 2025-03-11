const handleTimestamp = (timestamp: any) => {
  const validTimestamp = Number(timestamp);

  if (isNaN(validTimestamp)) {
      return 'Invalid Date';
  }

  const formattedDate = new Date(validTimestamp).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
  });

  return formattedDate;
};

export { handleTimestamp };
