export const splitText = (toSplit, textNumber) => {
  const newString =
    toSplit.length > textNumber
      ? toSplit.substring(0, textNumber) + "..."
      : toSplit;
  return newString;
};
