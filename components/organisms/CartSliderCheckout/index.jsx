import { formatNumberToCurrencyWithoutDecimals } from '@/styles/utils/formatNumberToCurrencyWithoutDecimals';
import { Box, Image } from '@chakra-ui/react';

export const CartSliderCheckout = ({
  productName,
  size,
  color,
  productPrice,
  productImage,
}) => {
  const whiteColors = [
    '#FFFFFF',
    'white',
    '#fff',
    'rgb(255, 255, 255)',
    'hsl(0, 0%, 100%)',
    'hsla(0, 0%, 100%, 1)',
    'rgba(255, 255, 255, 1)',
    'ffffff',
  ];

  const isWhite = whiteColors.includes(color.toLowerCase());

  return (
    <>
      <Box
        display="flex"
        width="100%"
        mb={2}
        mt={2}
        borderBottom="1px solid #c8c8c8"
      >
        <Box>
          <Image
            src={productImage}
            alt="image"
            w="50px"
            h="67px"
            borderRadius={12}
            mb={2}
          />
        </Box>
        <Box ml={4}>
          <Box
            fontFamily="Nunito"
            fontWeight={600}
            color="#797a7b"
            fontSize="14px"
          >
            {productName}
          </Box>
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontWeight={500}
            display="flex"
            alignItems="center"
            fontSize="14px"
          >
            <span>{size} -</span>
            <Box
              background={color}
              w={3}
              h={3}
              borderRadius={3}
              ml={2}
              border={isWhite ? '1px solid #797B7A' : 'none'}
            />
          </Box>
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontWeight={600}
            mb={1}
            fontSize="14px"
          >
            {formatNumberToCurrencyWithoutDecimals(productPrice)}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartSliderCheckout;
