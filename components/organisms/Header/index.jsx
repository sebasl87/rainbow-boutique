import { Cart, InputSearch } from '@/components/molecules';
import { useBreakpoints } from '@/hooks';

import { Box, Image, Text } from '@chakra-ui/react';
import { useAtomValue, useSetAtom } from 'jotai';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { productsInCart, productsList } from '../../../jotai/atoms';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PRODUCT } from '../../../api/apollo/querys/products';
import { BsEnvelopeArrowUp } from 'react-icons/bs';

export const Header = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  const { desktop } = useBreakpoints();
  const [getProductsBySearch, { data, loading }] = useLazyQuery(SEARCH_PRODUCT);

  const setProductsList = useSetAtom(productsList);

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      if (searchText.length > 2) {
        getProductsBySearch({ variables: { text: searchText } });
      } else {
        getProductsBySearch({ variables: { text: '' } });
      }
    }
  };

  useEffect(() => {
    if (!loading && data) {
      setProductsList(data.products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const itemsInCart = useAtomValue(productsInCart);

  return (
    <Box
      display="flex"
      justifyContent="center"
      px={{ lg: 6 }}
      py={{ lg: 5 }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bg="#fff"
    >
      {desktop ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="1200px"
        >
          <Image
            data-testid="logoImage"
            src="/RainbowLogo.png"
            alt="logo"
            w={{ lg: 320 }}
            onClick={() => router.push('/')}
            cursor="pointer"
          />
          <Box maxWidth={488} display="flex" width="100%" ml="64px">
            <InputSearch
              placeHolder="¿Qué estas buscando?"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
              handleClickOnIcon={() =>
                searchText.length > 2 &&
                router.push(`/e-commerce/product-list/${searchText}`)
              }
            />
          </Box>
          {/* <Box ml="64px" width="100%" maxW={108}>
            <BsEnvelopeArrowUp size={48} color="#797B7A" />
          </Box> */}
          <Box
            // maxW="72px"
            display="flex"
            justifyContent="flex-end"
            // width="100%"
          >
            <BsEnvelopeArrowUp size={48} color="#797B7A" />
            <Cart
              ml="64px"
              itemsCart={itemsInCart}
              handleClick={() => router.push('/carrito')}
            />
          </Box>
        </Box>
      ) : (
        <Box display="flex" width="100%" flexDirection="column">
          <Box
            height={{ base: '72px', md: '80px' }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            py={{ base: 4, md: 5 }}
            alignItems="center"
          >
            <Image
              data-testid="logoImageMobile"
              src="/RainbowLogo.png"
              alt="logoMobile"
              w={{ base: '32px', md: '60px' }}
              onClick={() => router.push('/')}
              cursor="pointer"
            />
            <Cart
              itemsCart={itemsInCart}
              handleClick={() => router.push('/e-commerce/cart')}
            />
          </Box>
          <Box
            height={{ base: '56px', md: '72px' }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            py={{ base: 3, md: 4 }}
          >
            <InputSearch
              placeHolder="Buscar productos"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
