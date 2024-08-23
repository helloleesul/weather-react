const getSameHour = (timestamp: number): boolean => {
  const currentDate = new Date();
  const providedDate = new Date(timestamp * 1000);

  return (
    currentDate.getDate() === providedDate.getDate() &&
    currentDate.getHours() === providedDate.getHours()
  );
};

export default getSameHour;
