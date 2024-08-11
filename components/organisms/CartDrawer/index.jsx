import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Image,
} from "@chakra-ui/react";
import {CartSliderProduct} from "@/components/organisms";


export const CartDrawer = ({ isOpen, onClose }) => {
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

          <CartSliderProduct />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
