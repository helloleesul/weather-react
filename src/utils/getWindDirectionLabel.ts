const getWindDirectionLabel = (deg: number) => {
  switch (Math.round((deg + 11.25) / 22.5) % 16) {
    case 0:
      return "북";
    case 1:
      return "북북동";
    case 2:
      return "북동";
    case 3:
      return "동북동";
    case 4:
      return "동";
    case 5:
      return "동남동";
    case 6:
      return "남동";
    case 7:
      return "남남동";
    case 8:
      return "남";
    case 9:
      return "남남서";
    case 10:
      return "남서";
    case 11:
      return "서남서";
    case 12:
      return "서";
    case 13:
      return "서북서";
    case 14:
      return "북서";
    case 15:
      return "북북서";
  }
};

export default getWindDirectionLabel;
