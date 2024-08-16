/* eslint-disable react-hooks/exhaustive-deps */
import ProductSliderHome from '@/components/molecules/ProductSliderHome';
import { HomeCategories } from '@/components/organisms';
import { Box, Image } from '@chakra-ui/react';
import { useAtom, useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { productsFiltered, totalProducts } from '../../../jotai/atoms';
import { formatNumberToCurrencyWithoutDecimals } from '../../../styles/utils/formatNumberToCurrencyWithoutDecimals';

export const HomeScreen = () => {
  const products = useAtomValue(totalProducts);
  const [filteredProds, setfilteredProds] = useAtom(productsFiltered);
  const router = useRouter();
  const [cat, setcat] = useState('');

  useEffect(() => {
    if (['nb', 'bb', 'bg'].includes(cat))
      setfilteredProds(products?.filter((p) => p.gender === cat));
    if (cat === 'sale') setfilteredProds(products?.filter((p) => p.sale));
  }, [cat]);

  return (
    <>
      <Box
        px={4}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <HomeCategories handleOnClick={setcat} />
        <Box w="100%" mt={8} display="flex" justifyContent="center">
          <Image
            src={'/banner_rainbow.png'}
            alt="carrito"
            w="100%"
            maxW="1200px"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          w="100%"
          justifyContent="center"
          pt={8}
          onClick={() => setfilteredProds(undefined)}
          cursor="pointer"
        >
          <Image
            data-testid="logoImage"
            src="/ArcoLogo.png"
            alt="logo"
            w={{ base: '40px', md: '60px' }}
          />
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight="600"
            px={4}
          >
            Destacados
          </Box>
          <Image
            data-testid="logoImage"
            src="/ArcoLogo.png"
            alt="logo"
            w={{ base: '40px', md: '60px' }}
          />
        </Box>
        <>
          <Box
            display="grid"
            width="100%"
            gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))"
            gap={4}
            alignItems="center"
            justifyContent="center"
            mt={10}
          >
            {filteredProds
              ? filteredProds?.map((product, index) => (
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="center"
                    key={product.name}
                  >
                    <ProductSliderHome
                      key={index}
                      images={product.photos}
                      isDiscount={false}
                      nameProduct={product.name}
                      product={product}
                      price={formatNumberToCurrencyWithoutDecimals(
                        product.price.total
                      )}
                      handleClick={() =>
                        router.push(`/productos/${product.id}`)
                      }
                    />
                  </Box>
                ))
              : products?.map((product, index) => (
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="center"
                    key={product.name}
                  >
                    <ProductSliderHome
                      key={index}
                      images={product.photos}
                      isDiscount={false}
                      nameProduct={product.name}
                      product={product}
                      price={formatNumberToCurrencyWithoutDecimals(
                        product.price.total
                      )}
                      handleClick={() =>
                        router.push(`/productos/${product.id}`)
                      }
                    />
                  </Box>
                ))}
          </Box>
        </>
      </Box>
    </>
  );
};

export default HomeScreen;
