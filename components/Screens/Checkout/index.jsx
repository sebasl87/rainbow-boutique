import { Step1, Step2, Step3 } from '@/components/organisms';
import { formatNumberToCurrencyWithoutDecimals } from '@/styles/utils/formatNumberToCurrencyWithoutDecimals';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { productsInCart } from '../../../jotai/atoms';
import { BreadcrumbRainbow, CartEmpty } from '../../molecules';
import { CartSliderCheckout } from '../../organisms/CartSliderCheckout';

export const Checkout = () => {
  const productsCart = useAtomValue(productsInCart);
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const customScrollbar = css`
    &::-webkit-scrollbar {
      width: 8px; /* Ancho del scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1; /* Fondo del track del scrollbar */
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1; /* Color del thumb del scrollbar */
      border-radius: 8px;
      border: 2px solid #f1f1f1; /* Espacio alrededor del thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #a1a1a1; /* Color del thumb al pasar el mouse */
    }
  `;



  const handleStep1Complete = () => {
    setStep1Complete(true);
    setTabIndex(1);
  };

  const handleStep2Complete = () => {
    setStep2Complete(true);
    setTabIndex(2);
  };

  const router = useRouter();

  const productsWaitInCart = useAtomValue(productsInCart);
  const totalAmount = productsWaitInCart.reduce((acc, product) => {
    return acc + product.productPrice;
  }, 0);

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
          <Box display={{ base: 'block', md: 'none' }} width="100%" mb={6}>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton bg="#EEF5F4">
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontFamily="Nunito"
                      color="#797b7a"
                      fontSize="20px"
                    >
                      <b>Carrito</b> - Total:{' '}
                      {formatNumberToCurrencyWithoutDecimals(totalAmount)}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {productsWaitInCart?.map((product, index) => (
                      <CartSliderCheckout
                        productName={product.productName}
                        size={product.size}
                        color={product.color}
                        productPrice={product.productPrice}
                        productImage={product.productImage}
                        key={product.productId + index}
                      />
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box display="flex" width="100%" order={{ base: 2, md: 1 }}>
            <Tabs
              width="100%"
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
            >
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
                  isDisabled={tabIndex !== 0}
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
                  isDisabled={tabIndex !== 1}
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
                  isDisabled={tabIndex !== 2}
                >
                  3. Revisión
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Step1 onComplete={handleStep1Complete} />
                </TabPanel>
                <TabPanel>
                  <Step2
                    onComplete={handleStep2Complete}
                    handleClickBack={() => setTabIndex(0)}
                  />
                </TabPanel>
                <TabPanel>
                  <Step3
                    onComplete={() => router.push('/checkout-success')}
                    handleClickBack={() => setTabIndex(1)}
                    goStepOne={() => setTabIndex(0)}
                    goStepTwo={() => setTabIndex(1)}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box
            width="300px"
            height="100%"
            display={{ base: 'none', md: 'flex' }}
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
              flexGrow={1}
            >
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                px={3}
                overflowY="auto"
                maxHeight="400px"
                css={customScrollbar}
              >
                {productsWaitInCart?.map((product, index) => (
                  <CartSliderCheckout
                    productName={product.productName}
                    size={product.size}
                    color={product.color}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                    key={product.productId + index}
                  />
                ))}
              </Box>
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                px={3}
                py={4}
                background="#EEF5F4"
              >
                <Box
                  fontFamily="Nunito"
                  color="#797b7a"
                  fontSize="20px"
                  fontWeight={600}
                >
                  Total:
                </Box>{' '}
                <Box
                  fontFamily="Nunito"
                  color="#797b7a"
                  fontSize="20px"
                  fontWeight={600}
                >
                  {formatNumberToCurrencyWithoutDecimals(totalAmount)}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;
