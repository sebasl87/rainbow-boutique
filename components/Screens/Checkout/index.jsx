import { useEffect } from 'react';
import { BreadcrumbRainbow, CartEmpty } from '../../molecules';
import { Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { productsInCart } from '../../../jotai/atoms';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Step1 } from '@/components/organisms';

export const Checkout = () => {
  const productsCart = useAtomValue(productsInCart);
  useEffect(() => {
    console.log(productsCart.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      px={4}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <BreadcrumbRainbow isCheckout />
      {productsCart.length === 0 ? (
        <CartEmpty />
      ) : (
        <Box
          display="flex"
          width="100%"
          mt={8}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box display="flex" width="100%" order={{ base: 2, md: 1 }}>
            <Tabs width="100%">
              <TabList display="flex" width="100%">
                <Tab
                  _selected={{
                    color: '#797B7A',
                    borderBottom: '2px solid',
                    borderColor: '#EBBEB3',
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                >
                  1. Envío
                </Tab>
                <Tab
                  _selected={{
                    color: '#797B7A',
                    borderBottom: '2px solid',
                    borderColor: '#EBBEB3',
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                >
                  2. Pago
                </Tab>
                <Tab
                  _selected={{
                    color: '#797B7A',
                    borderBottom: '2px solid',
                    borderColor: '#EBBEB3',
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                >
                  3. Revisión
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Step1 />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box
            width="300px"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            ml={4}
            order={{ base: 1, md: 2 }}
          >
            <Box
              background="#EEF5F4"
              fontFamily="Nunito"
              fontWeight={700}
              width="100%"
              display="flex"
              color="#797B7A"
              height="42px"
              justifyContent="center"
              alignItems="center"
              borderTopRadius={8}
            >
              Carrito
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              background="#FBFBFB"
              height="100%"
            >
              lalal
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;
