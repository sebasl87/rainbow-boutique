import { Box } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Cart = ({ itemsCart, handleClick }) => {
  return (
    <Box
      position="relative"
      display="inline-block"
      cursor="pointer"
      onClick={handleClick}
      data-testid="cartIcon"
      ml={{ base: 4, md: 6 }}
    >
      <AiOutlineShoppingCart size={48} color="#797B7A" />

      {itemsCart && itemsCart.length > 0 && (
        <Box
          position="absolute"
          borderRadius="50%"
          background="#E53E3E"
          fontSize={{ base: '12px', md: '14px' }}
          fontWeight="500"
          display="flex"
          justifyContent="center"
          color="#fff"
          width={{ base: 5, md: 6 }}
          height={{ base: 5, md: 6 }}
          alignItems="center"
          mt={-6}
          ml={6}
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
