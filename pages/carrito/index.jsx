import { CartEmpty, CartResume, CouponCard } from '@/components/molecules';
import { cartAtom, itemsListInCart, orderSummaryAtom } from '@/jotai/atoms';
import { Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import CartBottomBar from '../../components/molecules/CartBottomBar';

import { CartCardTable } from '../../components';
import { useRouter } from 'next/router';

export const CartScreen = () => {
  const cart = useAtomValue(cartAtom);
  const table = useAtomValue(itemsListInCart);
  const itemsCart = cart?.total_quantity || 0;
  const orderSummary = useAtomValue(orderSummaryAtom);

  const router = useRouter();
  return (
    <>
      {cart?.total_quantity === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            mb={{ base: 6, md: 8, lg: 10 }}
          >
            <Box
              color="#2D3748"
              fontFamily="danoneBold"
              fontSize={{ base: 16, md: 18, lg: 24 }}
            >
              Mi Carrito
            </Box>
            <Box
              ml={1}
              color="#718096"
              fontFamily="DanoneLight"
              fontSize={{
                base: 16,
                md: 18,
                lg: 24,
              }}
            >{`(${itemsCart} items)`}</Box>
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'row' }}
            mb={{ md: 38 }}
          >
            <Box width="100%" maxW={{ lg: 692 }} display="flex">
              <CartCardTable table={table} />
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              alignItems="flex-end"
              flexDirection="column"
            >
              <CartResume
                totalProducts={orderSummary.prices.subtotal_including_tax.value}
                totalDiscount={
                  orderSummary.prices.discounts.length > 0
                    ? orderSummary.prices.discounts[0].amount.value
                    : 0
                }
                totalCart={orderSummary.prices.grand_total.value}
                shippingCost={
                  orderSummary?.shipping_addresses?.length > 0
                    ? orderSummary.shipping_addresses[0]
                        .available_shipping_methods[0].price_incl_tax.value
                    : 0
                }
                handleClick={() => router.push('/checkout')}
              />
              <CouponCard />
            </Box>
          </Box>
          <CartBottomBar totalCart={orderSummary.prices.grand_total.value} />
        </>
      )}
    </>
  );
};

export default CartScreen;
