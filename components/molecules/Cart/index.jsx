import { Box, Image } from "@chakra-ui/react";

export const Cart = ({ itemsCart, handleClick }) => {
  return (
    <Box
      position="relative"
      display="inline-block"
      cursor="pointer"
      onClick={handleClick}
      data-testid="cartIcon"
    >
      <Image
        width={{ base: 8, md: 9, lg: 10 }}
        src="/cart.svg"
        alt="cart"
        // backgroundColor="transparent"
        color="red"
        fill="red"
      />
      {itemsCart && itemsCart.length > 0 && (
        <Box
          position="absolute"
          borderRadius="50%"
          background="#E53E3E"
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="500"
          display="flex"
          justifyContent="center"
          color="#fff"
          width={{ base: 5, md: 6 }}
          height={{ base: 5, md: 6 }}
          alignItems="center"
          mt={{ base: -10, md: -46, lg: -12 }}
          ml={{ base: 3, md: 3, lg: 4 }}
          px={{ md: 1 }}
          pb={{ md: 0.5 }}
          flexDirection="column"
        >
          {itemsCart.length}
        </Box>
      )}
    </Box>
  );
};

export default Cart;
