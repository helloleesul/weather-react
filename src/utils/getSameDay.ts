const getSameDay = (timestamp: number) => {
  const currentTimestamp = Date.now();

  return (
    new Date(currentTimestamp).toDateString() ===
    new Date(timestamp * 1000).toDateString()
  );
};

export default getSameDay;
