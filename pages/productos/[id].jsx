import { CategoriesHeader } from "@/components/organisms";
import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GET_PRODUCT } from "../../api/apollo/querys";
import ProductSlider from "../../components/molecules/ProductSlider";
import { ProductDetailsAddCartDescription } from "../../components/organisms";

import { RainbowSpinner } from "@/components/atoms";
import { BreadcrumbRainbow } from "@/components/molecules";

export const DetailProductScreen = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: { id },
    fetchPolicy: "no-cache",
  });

  if (loading) return <RainbowSpinner />;
  console.log("Data", data);
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
      </Box>
    </>
  );
};

export default DetailProductScreen;
