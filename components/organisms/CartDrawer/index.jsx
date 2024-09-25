import { CartSliderProduct } from "@/components/organisms";
import { productsInCart } from "@/jotai/atoms";
import { formatNumberToCurrencyWithoutDecimals } from "@/styles/utils/formatNumberToCurrencyWithoutDecimals";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";

export const CartDrawer = ({ isOpen, onClose }) => {
  const productsWaitInCart = useAtomValue(productsInCart);
  const router = useRouter();
  const totalAmount = productsWaitInCart.reduce((acc, product) => {
    return acc + product.productPrice;
  }, 0);
  console.log("productsWaitInCart", productsWaitInCart);
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
          {productsWaitInCart?.map((product, index) => (
            <CartSliderProduct
              productName={product.productName}
              size={product.productData.size}
              color={product.productColor}
              productPrice={product.productPrice}
              productImage={product.productImage}
              key={product.productId + index}
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
              Total: {formatNumberToCurrencyWithoutDecimals(totalAmount)}
            </Box>
            <Button
              width="full"
              mb={4}
              background="#D7ECE8"
              color="#797B7A"
              onClick={() => router.push("/checkout").then(onClose)}
            >
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
