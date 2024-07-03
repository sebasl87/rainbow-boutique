import { Client } from '@/api/apollo';
import { APPLY_COUPON_TO_CART, GET_CART } from '@/api/apollo/querys/cart';
import { cartAtom, orderSummaryAtom } from '@/jotai/atoms';
import { Box, Button, Input, InputGroup, useToast } from '@chakra-ui/react';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';

export const CouponCard = ({ discount = '10' }) => {
  const [coupon, setCoupon] = useState({ coupon: '' });
  const [cartData] = useAtom(cartAtom);
  const setOrderSummary = useSetAtom(orderSummaryAtom);


  const handleInputChange = (field, value) => {
    setCoupon({
      ...coupon,
      [field]: value,
    });
  };

  const toast = useToast();
  const handleSendCoupon = async () => {
    if (coupon.coupon.length > 0) {
      // API call to apply coupon
      try {
        await Client.mutate({
          mutation: APPLY_COUPON_TO_CART,
          variables: {
            input: {
              cart_id: cartData?.id,
              coupon_code: coupon.coupon,
            },
          },
          context: {
            headers: {
              Authorization: 'Bearer PONER TOKEN AQUI',
            },
          },
        });
        // Check if there is any update on the cart
        const getCartResponse = await Client.query({
          query: GET_CART,
          context: {
            headers: {
              Authorization: 'Bearer PONER TOKEN AQUI',
            },
          },
        });
        setOrderSummary({
          shipping_addresses:
            getCartResponse.data.customerCart.shipping_addresses,
          prices: getCartResponse.data.customerCart.prices,
        });
        toast({
          title: 'Descuento aplicado!',
          description: `Fue aplicado un descuento del ${discount}% sobre el valor de tu compra.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Descuento no aplicado',
          description: 'El cupón es inválido o no aplicable para esta compra.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Descuento no aplicado',
        description: 'El cupón es inválido o no aplicable para esta compra.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      border="1px solid  #E2E8F0"
      borderRadius={6}
      padding={{ base: 3, md: 4 }}
      maxW={{ base: '100%', md: 349, lg: 382 }}
      height="fit-content"
      mb={{ base: 76, md: 0 }}
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        color="#4A5568"
        fontSize={{ base: 14, md: 16, lg: 18 }}
        fontFamily="danoneLight"
        mb={{ base: 2, md: 3 }}
      >
        ¿Tienes un cupón de descuento?
      </Box>
      <Box display="flex" width="100%">
        <Box display="flex" width="100%">
          <InputGroup display="flex" alignItems="center">
            <Input
              placeholder="Ingresar cupón"
              value={coupon.coupon}
              handleOnluBlur={(e) =>
                handleInputChange('coupon', e.target.value)
              }
            />
          </InputGroup>
        </Box>
        <Box display="flex" ml={{ base: 2, md: 3 }}>
          <Button
            buttonText="Aplicar"
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            handleClick={handleSendCoupon}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CouponCard;
