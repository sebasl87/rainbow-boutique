import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';

import { ChevronRightIcon } from '@chakra-ui/icons';

export const BreadcrumbRainbow = ({
  categorieName = 'Categoria',
  productName = 'Producto',
  linkCategoria = '/',
  isProductPage,
  isCategoryPage,
  isCheckout,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      width="100%"
      mt={isCheckout ? 0 : 6}
      pl={{ lg: '16px' }}
    >
      {isProductPage && (
        <Breadcrumb
          fontFamily="Nunito"
          spacing="8px"
          fontSize={{ base: 14, md: 16, lg: 20 }}
          fontWeight={500}
          color="#797b7a"
          separator={<ChevronRightIcon color="#797b7a" />}
          suppressHydrationWarning
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={linkCategoria}>
              {categorieName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{productName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
      {isCategoryPage && (
        <Breadcrumb
          fontFamily="Nunito"
          spacing="8px"
          fontSize={{ base: 14, md: 16, lg: 20 }}
          fontWeight={500}
          color="#797b7a"
          separator={<ChevronRightIcon color="#797b7a" />}
          suppressHydrationWarning
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{categorieName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
      {isCheckout && (
        <Breadcrumb
          fontFamily="Nunito"
          spacing="8px"
          fontSize={{ base: 14, md: 16, lg: 20 }}
          fontWeight={500}
          color="#797b7a"
          separator={<ChevronRightIcon color="#797b7a" />}
          suppressHydrationWarning
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Checkout</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Box>
  );
};

export default BreadcrumbRainbow;
