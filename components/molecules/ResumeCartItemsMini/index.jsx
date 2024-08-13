import useCart from '@/hooks/useCart';
import { DeleteIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

export const ResumeCartItemsMini = ({ cartItem }) => {
  const {
    handleSubstractItem,
    handleIncreaseItem,
    handleRemoveItem,
    isLoading,
  } = useCart(cartItem?.product.sku);

  return (
    <Box display="flex" alignItems="center">
      {isLoading ? (
        <Box
          width={6}
          height={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight={'2rem'}
        >
          Cargando...
        </Box>
      ) : (
        <>
          <DeleteIcon
            color="rgba(113, 128, 150, 0.7)"
            cursor="pointer"
            _hover={{
              color: 'rgba(113, 128, 150, 1)',
            }}
            mr={2}
            width={3}
            onClick={() => {
              handleRemoveItem(cartItem?.product.sku);
            }}
          />
          <Box display="flex" border="2px solid #F8D588" borderRadius={24}>
            <Box
              width={6}
              height={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ background: '#F8D588' }}
              background="#fff"
              color="#797B7A"
              borderTopLeftRadius={24}
              borderBottomLeftRadius={24}
              onClick={() => handleSubstractItem(cartItem?.product.sku)}
              data-testid="minusItem"
              fontWeight="500"
              opacity={1}
              fontFamily="Nunito"
              fontSize="14px"
            >
              -
            </Box>
            <Box
              width={6}
              height={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize={12}
              color="#797B7A"
              fontFamily="Nunito"
            >
              {cartItem?.quantity}
            </Box>
            <Box
              width={6}
              height={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ background: '#F8D588' }}
              background="#fff"
              color="#797B7A"
              borderTopRightRadius={24}
              borderBottomRightRadius={24}
              onClick={() => handleIncreaseItem(cartItem?.product.sku)}
              data-testid="plusItem"
              fontWeight="500"
              fontFamily="Nunito"
              fontSize="14px"
            >
              +
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ResumeCartItemsMini;
