import { ProductCartButton } from "../../molecules";
import { useBreakpoints } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import ColorSelector from "../../molecules/ColorSelector";
import SizeSelector from "../../molecules/SizeSelector";
import { useMemo, useState } from "react";
import { formatNumberToCurrency } from "@/styles/utils/formatNumberToCurrency";
import { splitText } from "@/styles/utils/splitText";
import { idProduct, isAnySizeAvailable } from "@/utils/stock";

export const ProductDetailsAddCartDescription = ({
  productId,
  productTitle,
  currentValue,
  productDescription,
  colorAvailable,
  sizeAvailable,
}) => {
  const { tablet } = useBreakpoints();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState();

  console.log("sizeAvailable", sizeAvailable);
  console.log("SELECCIONADO: ", selectedColor, selectedSize);

  const anySizeAvailable = isAnySizeAvailable(
    sizeAvailable[selectedColor].sizesAvailable,
  );

  const memoIdProduct = useMemo(
    () =>
      sizeAvailable[selectedColor].sizesAvailable.find(
        (s) => s.size === selectedSize,
      ),
    [sizeAvailable, selectedColor, selectedSize],
  );

  return (
    <Box
      display="flex"
      width="100%"
      maxW={{ base: "100%", md: 312, lg: 532 }}
      color="rainbowGray"
      mt={{ base: 5, md: 12 }}
      ml={{ base: 0, md: 12, lg: 17 }}
      flexDirection="column"
    >
      <Text
        fontFamily="Nunito"
        fontSize={{ base: 24, lg: 28 }}
        fontWeight="600"
      >
        {tablet
          ? splitText(productTitle || "", 70)
          : splitText(productTitle || "", 60)}
      </Text>
      <Text
        fontFamily="Nunito"
        fontSize={{ base: 20, lg: 28 }}
        fontWeight="700"
      >
        {anySizeAvailable
          ? formatNumberToCurrency(currentValue)
          : "No disponible"}
      </Text>
      <Box
        mt={2}
        mb={2}
        color="#718096"
        fontSize={{ base: 12, md: 14, lg: 16 }}
        lineHeight={{ base: 4, md: 5, lg: 6 }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: productDescription,
          }}
        />
      </Box>
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colorAvailable.map((color) => color.hex)}
      />
      <SizeSelector
        availableSizes={sizeAvailable[selectedColor].sizesAvailable}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      {anySizeAvailable && (
        <Box mt={{ base: 3, md: 4, lg: 5 }}>
          <ProductCartButton
            productId={memoIdProduct}
            size={selectedSize}
            color={colorAvailable[selectedColor].hex}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetailsAddCartDescription;
