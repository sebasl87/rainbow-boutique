import ProductSliderHome from "@/components/molecules/ProductSliderHome";
import { HomeCategories } from "@/components/organisms";
import { Image, Box } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { productsList } from "../../../jotai/atoms";
import { formatNumberToCurrencyWithoutDecimals } from "../../../styles/utils/formatNumberToCurrencyWithoutDecimals";
import { useRouter } from "next/router";

export const HomeScreen = ({ images }) => {
  const products = useAtomValue(productsList);
  console.log(products);
  const router = useRouter();
  return (
    <>
      <Box
        px={4}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <HomeCategories />
        <Box w="100%" mt={8} display="flex" justifyContent="center">
          <Image
            src={"/banner_rainbow.png"}
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
        >
          <Image
            data-testid="logoImage"
            src="/ArcoLogo.png"
            alt="logo"
            w={{ base: "40px", md: "60px" }}
          />
          <Box
            color="#797B7A"
            fontFamily="Nunito"
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="600"
            px={4}
          >
            Destacados
          </Box>
          <Image
            data-testid="logoImage"
            src="/ArcoLogo.png"
            alt="logo"
            w={{ base: "40px", md: "60px" }}
          />
        </Box>
        <>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-evenly"
            flexWrap="wrap"
            gap={4}
            flexDirection={{ base: "column", md: "row" }}
            px={{ base: 0, md: 0 }}
            mt={10}
          >
            {products?.map((product, index) => (
              <ProductSliderHome
                key={index}
                images={product.photos}
                isDiscount={false}
                nameProduct={product.name}
                product={product}
                price={formatNumberToCurrencyWithoutDecimals(
                  product.price.total
                )}
                handleClick={() => router.push(`/productos/${product.id}`)}
              />
            ))}
          </Box>
        </>
      </Box>
    </>
  );
};

export default HomeScreen;
