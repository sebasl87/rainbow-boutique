import { useBreakpoints } from '@/hooks';

import { Box, Image } from '@chakra-ui/react';
import { ResumeCartItems } from '../../molecules';
import { formatCurrency } from '@/styles/utils/formatCurrency';
import { truncateText } from '@/styles/utils/truncateText';



export const CartCardTable = ({ table }) => {
  const { desktop } = useBreakpoints();

  return (
    <>
      <Box width="100%" mb={{ base: 6, md: 24, lg: 10 }}>
        {table?.map((item, index) => (
          <Box
            display="flex"
            padding={{ base: 2, md: 3, lg: 4 }}
            width="100%"
            borderTop="1px solid #E2E8F0"
            borderLeft="1px solid #E2E8F0"
            borderRight="1px solid #E2E8F0"
            borderRadius={
              table.length === 1
                ? '6px'
                : index === 0
                ? '6px 6px 0 0'
                : index === table.length - 1
                ? '0 0 6px 6px'
                : '0'
            }
            borderBottom={
              index === table.length - 1 ? '1px solid #E2E8F0' : 'none'
            }
            key={index}
          >
            <Box
              maxW={{ base: 68, md: 88 }}
              width="100%"
              height={{ base: 68, md: 89, lg: 104 }}
              display="flex"
              alignItems="center"
              onClick={() => console.log(item.product.sku)}
              cursor="pointer"
            >
              <Image
                src={item.product.image.url}
                alt=""
                objectFit="contain"
                width="100%"
                maxW={{ base: 68, md: 88 }}
                height={{ base: 68, md: 89, lg: 104 }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              height={{ base: 68, md: 89, lg: 104 }}
              justifyContent="space-between"
              ml={2}
            >
              <Box
                color="#4A5568"
                lineHeight={{ base: 4, md: 'normal', lg: 7 }}
                fontFamily="DanoneLight"
                fontSize={{ base: 12, md: 14, lg: 18 }}
                display="flex"
                width="100%"
              >
                {desktop
                  ? truncateText(item.product.name, 65)
                  : truncateText(item.product.name, 55)}
              </Box>
              <Box display="flex" width="100%" justifyContent="space-between">
                <Box display="flex">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                  >
                    {item.product.price_range.minimum_price.discount
                      .amount_off > 0 && (
                      <Box
                        fontSize={{ base: 10, md: 12, lg: 17 }}
                        textDecoration="line-through"
                        color="#718096"
                        lineHeight="normal"
                      >
                        {formatCurrency(
                          item.product.price_range.minimum_price.regular_price
                            .value
                        )}
                      </Box>
                    )}
                    <Box
                      display="flex"
                      fontSize={{ base: 12, md: 14, lg: 18 }}
                      color={
                        item.product.price_range.minimum_price.discount
                          .amount_off > 0
                          ? '#38A169'
                          : '#4A5568'
                      }
                      lineHeight={{ base: 4, md: 5, lg: 7 }}
                      fontWeight="700"
                    >
                      {formatCurrency(
                        item.product.price_range.minimum_price.final_price.value
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box display="flex">
                  <ResumeCartItems cartItem={item} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CartCardTable;
