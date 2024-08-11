import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";

export const BreadcrumbRainbow = ({
  categorieName = "Categoria",
  productName = "Producto",
  linkCategoria = "/",
  isProductPage,
  isCategoryPage,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      width="100%"
      mt={6}
      pl={{ lg: "16px" }}
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
            <Link href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={linkCategoria} passHref>
              <BreadcrumbLink>{categorieName}</BreadcrumbLink>
            </Link>
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
        >
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{categorieName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Box>
  );
};

export default BreadcrumbRainbow;
