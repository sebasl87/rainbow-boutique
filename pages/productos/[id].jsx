import { Box } from "@chakra-ui/react";
import ProductSlider from "../../components/molecules/ProductSlider";
import { ProductDetailsAddCartDescription } from "../../components/organisms";
import ShadowRainbow from "../../components/templates/ShadowRainbow";
import { CartDrawer } from "../../components/organisms";
import { GET_PRODUCT } from "../../api/apollo/querys";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDisclosure, Button } from "@chakra-ui/react";

export const DetailProductScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    query: { id },
  } = useRouter();
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Cargando...</p>;

  if (loading) return <p>Cargando...</p>;
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>

      <CartDrawer isOpen={isOpen} onClose={onClose} />

      <Box
        padding={{ base: 3, md: 6, lg: 9 }}
        display="flex"
        width="100vw"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ base: 6, md: 8, lg: 10 }}
        mb={{ base: 14, md: 50, lg: 29 }}
        justifyContent={{ md: "space-around", lg: "space-between" }}
      >
        <ShadowRainbow>
          <ProductSlider
            images={data?.product?.photos}
            isDiscount={false}
            discount=""
          />
        </ShadowRainbow>

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
    </>
  );
};

export default DetailProductScreen;
