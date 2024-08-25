import { CategoriesHeader } from '@/components/organisms';
import { Box, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAtomValue } from 'jotai';
import { totalProducts } from '../../../jotai/atoms';
import { formatNumberToCurrencyWithoutDecimals } from '../../../styles/utils/formatNumberToCurrencyWithoutDecimals';
import ProductSliderHome from '../../molecules/ProductSliderHome';
import { BreadcrumbRainbow } from '../../molecules/BreadcrumbRainbow';

export const Categories = () => {
  const router = useRouter();
  const products = useAtomValue(totalProducts);

  return (
    <>
      <Box
        px={4}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CategoriesHeader />
        <BreadcrumbRainbow isCategoryPage />
        <Box
          display="flex"
          alignItems="center"
          w="100%"
          justifyContent="center"
          pt={8}
        >
          <Image src="/star.png" alt="logo" w="40px" />
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontSize="24px"
            fontWeight="600"
            px={4}
          >
            Destacados
          </Box>
          <Image src="/star.png" alt="logo" w="40px" />
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
            {products?.map((product, index) => (
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
                    product.price.total,
                  )}
                  handleClick={() => router.push(`/productos/${product.id}`)}
                />
              </Box>
            ))}
          </Box>
        </>
      </Box>
    </>
  );
};

export default Categories;
