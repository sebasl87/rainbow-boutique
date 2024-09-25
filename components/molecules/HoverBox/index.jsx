import { Box, Center, HStack } from "@chakra-ui/react";
import ColorSelector from "../ColorSelector";
import SizeSelector from "../SizeSelector";
import { useState } from "react";
import ProductCartButton from "../ProductCartButton";

export const HoverBox = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  console.log("PRODUCT", product);
  return (
    <Box
      bg="#c2cec9e6"
      pos="absolute"
      borderRadius="12px"
      mt="70%"
      opacity={0}
      transition="opacity 0.3s ease-in-out"
      _hover={{ opacity: 1 }}
      w="100%"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Center p={3} display="flex" flexDirection="column">
        <HStack spacing={2} mb={2}>
          <ColorSelector
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={product.stock.map(({ color }) => color.hex)}
            showTitle={false}
          />
        </HStack>
        <HStack spacing={2} mb={2}>
          <SizeSelector
            sizes={product.stock[selectedColor].sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            showTitle={false}
          />
        </HStack>
        {product.stock[selectedColor].sizes.length > 0 && (
          <HStack spacing={2} mb={2}>
            <ProductCartButton
              productId={product}
              size={selectedSize}
              color={product.stock[selectedColor].color.hex}
            />
          </HStack>
        )}
      </Center>
    </Box>
  );
};

export default HoverBox;
