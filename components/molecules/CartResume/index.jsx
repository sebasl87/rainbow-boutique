import { useState } from 'react';

import { Box, Button } from '@chakra-ui/react';
import { ButtonCustomBase, DividerTitle } from '../../atoms';
import { formatCurrency } from '@/styles/utils/formatCurrency';

export const CartResume = ({
  handleClick,
  totalProducts,
  totalDiscount,
  totalCart,
  shippingCost,
  isCheckout,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClickButton = async () => {
    setLoading(true);
    if (typeof handleClick === 'function') {
      await handleClick();
    }
    setLoading(false);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius={6}
        padding={{ base: 3, md: 4 }}
        border="1px solid #E2E8F0"
        width="100%"
        maxW={{ base: '100%', md: isCheckout ? '100%' : 349, lg: 382 }}
        height="fit-content"
        mb={6}
      >
        {!isCheckout && (
          <Box
            fontFamily="danoneBold"
            fontSize={{ base: 14, md: 16, lg: 18 }}
            color="#4A5568"
            mb={{ base: 3, md: 4 }}
            display="flex"
            justifyContent="center"
          >
            Resumen del pedido
          </Box>
        )}
        <Box
          display="flex"
          width="100"
          justifyContent="space-between"
          color="#4A5568"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          mb={2}
        >
          <Box>Productos</Box>
          <Box>{formatCurrency(totalProducts || 0)}</Box>
        </Box>
        <Box
          display="flex"
          width="100"
          justifyContent="space-between"
          color="#4A5568"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          mb={2}
        >
          <Box>Envío</Box>
          <Box>{formatCurrency(shippingCost || 0)}</Box>
        </Box>
        <Box
          display="flex"
          width="100"
          justifyContent="space-between"
          color="#4A5568"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          mb={{ base: 2, md: 3 }}
        >
          <Box>Descuentos</Box>
          <Box>-{formatCurrency(totalDiscount || 0)}</Box>
        </Box>
        <DividerTitle />
        <Box
          display="flex"
          width="100"
          justifyContent="space-between"
          color="rgba(74, 85, 104, 1)"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          mt={{ base: 3, md: 3 }}
          mb={{ base: 0, md: 4 }}
          fontWeight="700"
        >
          <Box>Total</Box>
          <Box>{formatCurrency(totalCart || 0)}</Box>
        </Box>
        <Box
          display={{
            base: 'none',
            md: isCheckout ? 'none' : 'contents',
            lg: 'contents',
          }}
          width="100%"
        >
          {loading ? (
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              alignItems="center"
              h={{ base: 8, md: 10, lg: 12 }}
            >
              Carregando...
            </Box>
          ) : (
            <ButtonCustomBase
              buttonText={
                isCheckout
                  ? `Realizar pedido ${formatCurrency(totalCart || 0)}`
                  : 'Continuar'
              }
              handleClick={handleClickButton}
            />
          )}
        </Box>
      </Box>
      {isCheckout && (
        <Box
          display={{
            base: 'flex',
            lg: 'none',
          }}
          width="100%"
          justifyContent="center"
          mt={{ base: 1, md: 2 }}
          mb={{ base: 10 }}
        >
          <Button
            onClick={handleClick}
            variant="solid"
            bg="danoneBlue"
            color="white"
            _hover={{ background: '#3182CE' }}
            _active={{ bg: '#002677' }}
            size="md"
            width={{ base: '100%', md: 'fit-content' }}
          >
            {`Realizar pedido ${formatCurrency(totalCart || 0)}`}
          </Button>
        </Box>
      )}
    </>
  );
};

export default CartResume;
