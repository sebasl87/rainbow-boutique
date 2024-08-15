import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Image,
  Button,
  DrawerFooter,
  Flex,
} from "@chakra-ui/react";
import { CartSliderProduct } from "@/components/organisms";
import { formatNumberToCurrencyWithoutDecimals } from "@/styles/utils/formatNumberToCurrencyWithoutDecimals";

export const CartDrawer = ({ isOpen, onClose }) => {
  const productsSlice = [
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "red",
      productPrice: 19000,
      productImage: "/04.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "#fff",
      productPrice: 19001,
      productImage: "/03.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "red",
      productPrice: 19000,
      productImage: "/02.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "red",
      productPrice: 19000,
      productImage: "/01.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "blue",
      productPrice: 19000,
      productImage: "/04.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "green",
      productPrice: 19001,
      productImage: "/03.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "orange",
      productPrice: 19000,
      productImage: "/02.jpg",
    },
    {
      productName: "Body Osito",
      productTail: "T1",
      productColor: "yellow",
      productPrice: 19000,
      productImage: "/01.jpg",
    },
  ];

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="0px" padding="0px">
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            fontFamily="Nunito"
            fontSize="28px"
            fontWeight="500"
            color="#797B7A"
            background="#EEF5F4"
            py={4}
            alignItems="center"
          >
            <Box pl={4}>
              <Image
                src="/closeBtn.png"
                alt="close"
                w="32px"
                cursor="pointer"
                onClick={onClose}
              />
            </Box>
            <Box display="flex" width="100%" justifyContent="center" pr={4}>
              Carrito
            </Box>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          {productsSlice?.map((product, index) => (
            <CartSliderProduct
              productName={product.productName}
              productTail={product.productTail}
              productColor={product.productColor}
              productPrice={product.productPrice}
              productImage={product.productImage}
              key={index}
            />
          ))}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Flex direction="column" width="full">
            <Box
              fontFamily="Nunito"
              color="#797b7a"
              fontWeight={600}
              fontSize="20px"
              mb={2}
            >
              Total: {formatNumberToCurrencyWithoutDecimals(30000)}
            </Box>
            <Button width="full" mb={4} background="#D7ECE8" color="#797B7A">
              FINALIZAR COMPRA
            </Button>
            <Button
              width="full"
              variant="outline"
              borderColor="#EBBEB3"
              color="#EBBEB3"
              fontWeight={400}
              onClick={onClose}
            >
              SEGUIR COMPRANDO
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
