import { formatNumberToCurrencyWithoutDecimals } from '@/styles/utils/formatNumberToCurrencyWithoutDecimals';
import { Box, Image } from '@chakra-ui/react';

export const CartSliderProduct = ({
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
        py={2}
        borderBottom="1px solid #c8c8c8"
      >
        <Box>
          <Image
            src={productImage}
            alt="image"
            w="60px"
            h="72px"
            borderRadius={12}
            mb={2}
          />
        </Box>
        <Box ml={4}>
          <Box
            fontFamily="Nunito"
            fontWeight={600}
            color="#797a7b"
            fontSize="18px"
          >
            {productName}
          </Box>
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontWeight={500}
            display="flex"
            alignItems="center"
          >
            <span>{size} -</span>
            <Box
              background={color}
              w={4}
              h={4}
              borderRadius={3}
              ml={2}
              border={isWhite ? '1px solid #797B7A' : 'none'}
            />
          </Box>
          <Box color="#797B7A" fontFamily="Nunito" fontWeight={600} mb={1}>
            {formatNumberToCurrencyWithoutDecimals(productPrice)}
          </Box>
          {/* <ResumeCartItemsMini /> ---> POR EL MOMENTO LO QUITAMOS POR EL MANEJO DE STOCK */}
        </Box>
      </Box>
    </>
  );
};

export default CartSliderProduct;
