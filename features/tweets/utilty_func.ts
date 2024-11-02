export const getGridColumns = (imageCount: number): string => {
  switch (imageCount) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
    case 4:
      return "grid-cols-2";
    default:
      return "grid-cols-3";
  }
};
