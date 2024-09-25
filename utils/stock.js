export const isSizeAvailable = (availableSizes, size) => {
  const foundSize = availableSizes.find((s) => s.size === size);
  return foundSize ? foundSize.available : false;
};

export const isAnySizeAvailable = (availableSizes) => {
  return availableSizes.some((size) => size.available);
};

export const idProduct = (sizeAvailable, selectedColor, selectedSize) => {
  return sizeAvailable[selectedColor].sizesAvailable.find(
    (s) => s.size === selectedSize
  );
};
