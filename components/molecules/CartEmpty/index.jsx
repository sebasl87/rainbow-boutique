import { Box, Image } from '@chakra-ui/react';

export const CartEmpty = () => {
  return (
    <Box
      background="white"
      width="100%"
      display="flex"
      flex-direction="column"
      flexDirection="column"
      alignItems="center"
      mb={{ base: "0px", lg: "100px" }}
      mt={5}
    >
      <Image
        src="/empty_cart.svg"
        alt="cart"
        width={{ base: 280, md: 400 }}
      />
      <Box
        fontFamily="Nunito"
        fontWeight={600}
        color="#797B7A"
        fontSize={{ base: 18, md: 18, lg: 24 }}
        mt={{ base: 1, md: 1, lg: 2 }}
      >
        Tu carrito esta vacio
      </Box>
    </Box>
  );
};

export default CartEmpty;
