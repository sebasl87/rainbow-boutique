import { itemsListInCart, orderSummaryAtom } from '@/jotai/atoms';

import { Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { useMemo } from 'react';
import ButtonCustomBase from '../../atoms/ButtonCustomBase/index';
import { useRouter } from 'next/router';
import { formatCurrency } from '@/styles/utils/formatCurrency';

const CartBottomBar = ({ totalCart }) => {
  const cartList = useAtomValue(itemsListInCart);
  const orderSummary = useAtomValue(orderSummaryAtom);
  const router = useRouter();
  const itemList = useMemo(() => {
    return cartList?.map((item) => ({
      item_id: item.product.sku,
      item_name: item.product.name,
      quantity: item.quantity,
      price: item.product.price_range.minimum_price.final_price.value,
      discount: item.product.price_range.maximum_price.discount.amount_off,
    }));
  }, [cartList]);

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="64px"
      backgroundColor="#E2E8F0"
      display={{ base: 'flex', md: 'none' }}
      justifyContent="space-between"
      alignItems="center"
      padding={4}
      borderTop="1px solid #CBD5E0"
    >
      <Box display="flex" flexDirection="column">
        <Box color="#4A5568" fontSize={12} lineHeight={4}>
          Total
        </Box>
        <Box color="#4A5568" fontSize={12} lineHeight={4} fontWeight="700">
          {formatCurrency(totalCart || 0)}
        </Box>
      </Box>
      <ButtonCustomBase
        buttonText="Continuar"
        handleClick={() => router.push('/checkout')}
      />
    </Box>
  );
};

export default CartBottomBar;
