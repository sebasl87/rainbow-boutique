import { CategoriesHeader } from "@/components/organisms";
import { Box } from "@chakra-ui/react";
import ProductSlider from "../../components/molecules/ProductSlider";
import { ProductDetailsAddCartDescription } from "../../components/organisms";
import { CartDrawer } from "../../components/organisms";
import { GET_PRODUCT } from "../../api/apollo/querys";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDisclosure, Button } from "@chakra-ui/react";
import { BreadcrumbRainbow } from "@/components/molecules";
import { RainbowSpinner } from "@/components/atoms";

export const DetailProductScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    query: { id },
  } = useRouter();
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <RainbowSpinner />;

  return (
    <>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
      <Box
        px={4}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CategoriesHeader />
        <BreadcrumbRainbow isProductPage />
        <Box
          display="flex"
          width={{ base: "100%", lg: "1200px" }}
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: 0, md: 6 }}
          mb={{ base: 14, md: 50, lg: 29 }}
          justifyContent={{ md: "space-around", lg: "space-between" }}
        >
          <ProductSlider
            images={data?.product?.photos}
            isDiscount={false}
            discount=""
          />

          <ProductDetailsAddCartDescription
            productTitle={
              data.product.name[0].toUpperCase() + data.product.name.slice(1)
            }
            isDiscount={data.product.price.hasDiscount}
            discountValue={data.product.price.subtotal}
            currentValue={data.product.price.total}
            colorAvailable={data.product.stock.map((stock) => stock.color)}
            sizeAvailable={data.product.stock}
            productDescription={data.product.description}
            productId={id}
          />
        </Box>
        <Button colorScheme="blue" onClick={onOpen}>
          Open
        </Button>
      </Box>
    </>
  );
};

export default DetailProductScreen;
