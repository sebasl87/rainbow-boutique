import { ResumeCartItemsMini } from "@/components/molecules";
import { Box, Image } from "@chakra-ui/react";

export const CartSliderProduct = () => {
  return (
    <>
      <Box display="flex" width="100%">
        <Box>
          <Image
            src="/01.jpg"
            alt="image"
            w="100px"
            h="135px"
            borderRadius={12}
          />
        </Box>
        <Box>
          <Box fontColor="#797B7A" fontFamily="Nunito">Body osito</Box>
          <Box>Color: Blanco</Box>
          <Box>T1</Box>
          <Box>$ 19.000</Box>
          <ResumeCartItemsMini />
        </Box>
      </Box>
    </>
  );
};

export default CartSliderProduct;
