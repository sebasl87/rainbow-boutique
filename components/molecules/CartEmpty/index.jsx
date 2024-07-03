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
      mb={{ base: 200, lg: 150 }}
    >
      <Image
        src="/cartEmpty.svg"
        alt="cart"
        width={{ base: 20, md: 100, lg: 150 }}
      />
      <Box
        fontFamily="danoneBold"
        color="#718096"
        fontSize={{ base: 18, md: 18, lg: 24 }}
        mt={{ base: 1, md: 1, lg: 2 }}
      >
        Tu carrito esta vacio
      </Box>
    </Box>
  );
};

export default CartEmpty;
